import { LitElement, html, css } from 'lit'
import './Game/views/gameView.js'

class GreenRedLight extends LitElement {
  render() {
    return html` <main><game-view></game-view></main> `
  }

  static styles = css`
    :host {
      min-height: 100vh;
      color: white;
    }

    main {
      background-color: #121113;
      height: 100vh;
      width: 100%;
    }
  `
}

customElements.define('green-red-light', GreenRedLight)
