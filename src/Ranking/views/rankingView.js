import { LitElement, html, css } from 'lit'
import { Router } from '@vaadin/router'
import { View } from '../../shared/constants/view.js'
import '../components/rankingTableComponent.js'

const exitIconSrc = new URL(
  '../../../assets/right-from-bracket-solid.svg',
  import.meta.url
).href

class RankingView extends LitElement {
  static _emitExit() {
    Router.go({ pathname: View.Home.id })
  }

  render() {
    return html`
      <div id="ranking-containter">
        <div id="ranking-head">
          <p>Ranking</p>
        </div>
        <ranking-table-component></ranking-table-component>
      </div>
      <img
        class="exit-icon"
        alt="exit-icon"
        src=${exitIconSrc}
        @click=${RankingView._emitExit}
        tabindex="0"
      />
    `
  }

  static styles = css`
    :host {
      min-height: 100%;
    }

    #ranking-containter {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-top: 25px;
      margin-bottom: 25px;
    }

    #ranking-head > p {
      font-size: 1.8rem;
    }

    ranking-table-component {
      display: inline-block;
    }

    .exit-icon {
      position: fixed;
      height: 25px;
      top: 22px;
      right: 5%;
      filter: invert(100%);
    }

    .exit-icon:hover {
      filter: invert(80%);
    }
  `
}

customElements.define('ranking-view', RankingView)
