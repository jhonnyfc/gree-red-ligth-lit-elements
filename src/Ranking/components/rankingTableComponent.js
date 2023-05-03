import { LitElement, html, css } from 'lit'
import { repeat } from 'lit/directives/repeat.js'
import './rankingLineComponent.js'
import { PlayerHelper } from '../../shared/helpers/playerHelper.js'

class RankingTableComponent extends LitElement {
  static properties = {
    playersList: { type: String, state: true }
  }

  constructor() {
    super()
    this.playersList = PlayerHelper.getPlayerList()
    this._sortPlayerList()
  }

  _sortPlayerList() {
    this.playersList.sort(
      (playerA, playerB) => playerB.highScore - playerA.highScore
    )
  }

  render() {
    return html`
      <div id="ranking-table-container">
        <div id="ranking-table-head">
          <p>Name</p>
          <p class="ranking-ponints-head">Points</p>
        </div>

        ${repeat(
          this.playersList,
          (_player, index) => index,
          (player) => html`
            <ranking-line-component
              .userName=${player.userName}
              .highScore=${player.highScore}
            ></ranking-line-component>
          `
        )}
      </div>
    `
  }

  static styles = css`
    :host {
      min-height: 100%;
    }

    #ranking-table-container {
      width: 250px;
      font-size: 1.25rem;
    }

    #ranking-table-head {
      display: grid;
      flex-direction: row;
      grid-template-columns: 1fr 1fr;
      font-weight: bold;
    }

    .ranking-ponints-head {
      text-align: end;
    }
  `
}

customElements.define('ranking-table-component', RankingTableComponent)
