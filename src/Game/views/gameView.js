import { LitElement, html, css } from 'lit'
import '../components/topBarComponent.js'

const traffiLightIconSrc = new URL(
  '../../../assets/traffic-light-solid.svg',
  import.meta.url
).href

class GameView extends LitElement {
  static properties = {
    userName: { type: String },
    highScore: { type: Number },
    score: { type: Number },
    isGreen: { type: Boolean }
  }

  constructor() {
    super()
    this.userName = 'Pedro'
    this.highScore = 10
    this.score = 0
    this.isGreen = true
  }

  firstUpdated() {
    this._beginGame()
  }

  async _beginGame() {
    for (;;) {
      const promesa = new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, this._calcSleepMillis())
      })
      await promesa // eslint-disable-line
      this.isGreen = !this.isGreen
    }
  }

  _calcSleepMillis() {
    if (!this.isGreen) {
      return 3000
    }

    return Math.max(10000 - this.score * 100, 2000) + Math.random(-1500, 1500)
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
