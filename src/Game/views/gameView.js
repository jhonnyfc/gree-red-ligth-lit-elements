import { LitElement, html, css } from 'lit'
import '../components/topBarComponent.js'

class GameView extends LitElement {
  static properties = {
    userName: { type: String },
    highScore: { type: Number },
    score: { type: Number }
  }

  constructor() {
    super()
    this.userName = 'Pedro'
    this.highScore = 10
    this.score = 0
  }

  render() {
    return html`
      <main>
        <top-bar-component .userName=${this.userName}></top-bar-component>
      </main>
    `
  }

  static styles = css`
    :host {
      min-height: 100vh;
    }
  `
}

customElements.define('game-view', GameView)
