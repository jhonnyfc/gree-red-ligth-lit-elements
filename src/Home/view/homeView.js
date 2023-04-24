import { LitElement, html, css } from 'lit'
import '../components/inputFieldComponent.js'
import '../components/buttonComponent.js'
import { Router } from '@vaadin/router'
import { PlayerHelper } from '../../shared/helpers/playerHelper.js'
import { View } from '../../shared/constants/view.js'

const mouseIconSrc = new URL(
  '../../../assets/computer-mouse-solid.svg',
  import.meta.url
).href

class HomeView extends LitElement {
  static properties = {
    userName: { type: String, state: true }
  }

  constructor() {
    super()
    this.userName = ''
  }

  _updatUserName(e) {
    const { detail } = e
    this._checkUserName(detail.value)
  }

  _checkUserName(userName) {
    if (!userName) {
      this.userName = ''
    }

    this.userName = userName.replace(/[^a-z0-9]/gi, '')
  }

  _joinGame() {
    if (!this.userName) {
      return
    }

    PlayerHelper.createPlayer(this.userName)
    PlayerHelper.setCurrentPlayer(this.userName)
    Router.go({ pathname: View.Game.id })
  }

  render() {
    return html`
      <div id="home-containter">
        <div id="home-head">
          <span>
            <img
              class="app-mouse-icon"
              alt="app mouse icon"
              .src=${mouseIconSrc}
            />
          </span>
          <p>Create New Player</p>
          <input-field-component
            label="Name*"
            .value=${this.userName}
            @updateValue=${this._updatUserName}
          ></input-field-component>
          <button-component
            label="JOIN"
            @click=${this._joinGame}
          ></button-component>
        </div>
      </div>
    `
  }

  static styles = css`
    :host {
      min-height: 100vh;
    }

    #home-containter > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-top: 100px;
    }

    #home-head > span {
      display: inline-flex;
      height: 50px;
      width: 50px;
      background-color: #c987d5;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
    }

    .app-mouse-icon {
      width: 20px;
    }

    #home-head > p {
      font-size: 1.8rem;
    }

    input-field-component {
      display: inline-block;
      width: 300px;
    }

    button-component {
      width: 300px;
      margin-top: 35px;
    }
  `
}

customElements.define('home-view', HomeView)
