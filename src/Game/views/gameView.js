import { LitElement, html, css } from 'lit'
import { Router } from '@vaadin/router'
import { GameHelper } from '../helper/gameHelper.js'
import { PlayerHelper } from '../../shared/helpers/playerHelper.js'
import { View } from '../../shared/constants/view.js'
import '../components/topBarComponent.js'
import '../components/stepsComponent.js'

const traffiLightIconSrc = new URL(
  '../../../assets/traffic-light-solid.svg',
  import.meta.url
).href

const gameSoundnSrc = new URL('../../../assets/game-song.mp3', import.meta.url)
  .href

class GameView extends LitElement {
  static properties = {
    userName: { type: String, state: true },
    highScore: { type: Number, state: true },
    score: { type: Number, state: true },
    isGreen: { type: Boolean, state: true },
    gameSoundEl: { type: Object, state: true },
    isPlaying: { type: Object, state: true }
  }

  constructor() {
    super()
    this.userName = ''
    this.highScore = 0
    this.score = 0
    this.isGreen = true
    this.isPlaying = false
  }

  firstUpdated() {
    this.userName = PlayerHelper.getCurrentPlayer()
    const userData = PlayerHelper.getPlayer(this.userName)
    this.highScore = userData.highScore
    this.score = userData.score
    this.gameHelper = new GameHelper(this.score, this.userName)

    this.gameSoundEl = this.shadowRoot.querySelector('#game-sound')
    this._pauseMusic()

    this._beginGame()
  }

  async _beginGame() {
    this.isPlaying = true
    for (;;) {
      if (!this.isPlaying) {
        return
      }
      const sleepMills = this.gameHelper.calcSleepMillis(this.isGreen)
      this._musicControll(sleepMills)
      // eslint-disable-next-line
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, sleepMills)
      })
      this.isGreen = !this.isGreen
    }
  }

  _endGame() {
    this.isPlaying = false
  }

  _stepClick(e) {
    const { detail } = e

    this.score = this.gameHelper.controlStep(detail, this.isGreen)

    const { highScore } = PlayerHelper.getPlayer(this.userName)
    this.highScore = highScore
  }

  _exitGame() {
    PlayerHelper.updatePlayer(this.userName, this.score)
    PlayerHelper.removeCurrentPlayer()
    this.isPlaying = false
    Router.go({ pathname: View.Home.id })
  }

  _musicControll(sleepMills) {
    if (this.isGreen) {
      return this._playMusic(sleepMills)
    }

    return this._pauseMusic()
  }

  _playMusic(sleepMills) {
    this.gameSoundEl.play()
    this.gameSoundEl.playbackRate = (11.232 * 1000) / sleepMills
  }

  _pauseMusic() {
    this.gameSoundEl.pause()
    this.gameSoundEl.currentTime = 0
  }

  render() {
    return html`
      <div id="game-containter">
        <top-bar-component
          .userName=${this.userName}
          @game-exit=${this._exitGame}
        ></top-bar-component>
        <div>
          <p class="high-score-title">High Score: ${this.highScore}</p>
          <img
            class="traffic-light  ${this.isGreen
              ? 'traffic-light-green'
              : 'traffic-light-red'}"
            alt="luz de trafico"
            .src=${traffiLightIconSrc}
          />
          <p class="score-title">Score: ${this.score}</p>
          <steps-component @playerStep=${this._stepClick}></steps-component>
        </div>
      </div>
      <audio id="game-sound" preload="metadata">
        <source .src=${gameSoundnSrc} />
      </audio>
    `
  }

  static styles = css`
    :host {
      min-height: 100vh;
    }

    #game-containter > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 40px;
    }

    .traffic-light {
      height: 120px;
      margin-top: 30px;
    }

    .traffic-light-green {
      filter: invert(76%) sepia(13%) saturate(1191%) hue-rotate(73deg)
        brightness(89%) contrast(86%);
    }

    .traffic-light-red {
      filter: invert(38%) sepia(53%) saturate(612%) hue-rotate(309deg)
        brightness(111%) contrast(78%);
    }

    .high-score-title,
    .score-title {
      font-size: 1.6rem;
      text-align: center;
    }
  `
}

customElements.define('game-view', GameView)
