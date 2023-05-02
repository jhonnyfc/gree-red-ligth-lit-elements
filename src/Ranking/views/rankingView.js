import { LitElement, html, css } from 'lit'
import '../components/rankingTableComponent.js'

class RankingView extends LitElement {
  render() {
    return html`
      <div id="ranking-containter">
        <div id="ranking-head">
          <p>Ranking</p>
        </div>
        <ranking-table-component></ranking-table-component>
      </div>
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
  `
}

customElements.define('ranking-view', RankingView)
