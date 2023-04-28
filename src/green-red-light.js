import { LitElement, html, css } from 'lit'
import { AppRouter } from './shared/helpers/router.js'
import './Game/views/gameView.js'
import './Home/view/homeView.js'

class GreenRedLight extends LitElement {
  firstUpdated() {
    AppRouter.initRouter.call(this)
  }

  render() {
    return html`<main id="router-container"></main> `
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
