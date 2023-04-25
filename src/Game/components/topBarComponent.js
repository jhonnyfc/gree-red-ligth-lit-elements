import { LitElement, html, css } from 'lit'

const exitIconSrc = new URL(
  '../../../assets/right-from-bracket-solid.svg',
  import.meta.url
).href

class TopBarComponent extends LitElement {
  static properties = {
    userName: { type: String }
  }

  constructor() {
    super()
    this.userName = 'Pedro'
  }

  _emitExit() {
    this.dispatchEvent(new CustomEvent('game-exit'))
  }

  render() {
    return html`
      <div id="top-bar">
        <span class="user-name">Hi ${this.userName}</span>
        <span>
          <img
            class="exit-icon"
            alt="exit-icon"
            src=${exitIconSrc}
            @click=${this._emitExit}
            tabindex="0"
        /></span>
      </div>
    `
  }

  static styles = css`
    :host {
    }

    #top-bar {
      height: 70px;
      background-color: #232123;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5%;
    }

    .user-name {
      font-size: 1.3rem;
    }

    .exit-icon {
      height: 25px;
      filter: invert(100%);
    }

    .exit-icon:hover {
      filter: invert(80%);
    }
  `
}

customElements.define('top-bar-component', TopBarComponent)
