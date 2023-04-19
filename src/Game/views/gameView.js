import { LitElement, html, css } from 'lit'
import { GameHelper } from '../helper/gameHelper.js'
import '../components/topBarComponent.js'
import '../components/stepsComponent.js'

const traffiLightIconSrc = new URL(
  '../../../assets/traffic-light-solid.svg',
  import.meta.url
).href

class GameView extends LitElement {
  static properties = {
    userName: { type: String, state: true },
    highScore: { type: Number, state: true },
    score: { type: Number, state: true },
    isGreen: { type: Boolean, state: true }
  }

  constructor() {
    super()
    this.userName = 'Pedro'
    this.highScore = 10
    this.score = 0
    this.isGreen = true
    this.gameHelper = new GameHelper(this.score)
  }

  firstUpdated() {
    this._beginGame()
  }

  async _beginGame() {
    for (;;) {
      // eslint-disable-next-line
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, this.gameHelper.calcSleepMillis())
      })
      this.isGreen = !this.isGreen
    }
  }

  _stepClick(e) {
    const { detail } = e

    this.score = this.gameHelper.controlStep(detail, this.isGreen)
  }

  render() {
    return html`
      <div id="game-containter">
        <top-bar-component .userName=${this.userName}></top-bar-component>
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
