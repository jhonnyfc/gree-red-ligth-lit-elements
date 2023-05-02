import { LitElement, html, css } from 'lit'

class RankingLineComponent extends LitElement {
  static properties = {
    userName: { type: String },
    highScore: { type: String }
  }

  render() {
    return html`
      <div id="ranking-line-container">
        <p>${this.userName}</p>
        <p class="ranking-ponints">${this.highScore}</p>
      </div>
    `
  }

  static styles = css`
    :host {
      min-height: 100%;
    }

    #ranking-line-container {
      display: grid;
      flex-direction: row;
      grid-template-columns: 1fr 1fr;
      width: 100%;
    }

    .ranking-ponints {
      text-align: end;
    }
  `
}

customElements.define('ranking-line-component', RankingLineComponent)
