import { html } from 'lit'
import sinon from 'sinon'
import { fixture, expect } from '@open-wc/testing'
import { PlayerHelper } from '../../../../src/shared/helpers/playerHelper.js'
import '../../../../src/Ranking/components/rankingTableComponent.js'

describe('RankingTableComponent', () => {
  let playersList

  const getPlayerListStub = sinon.stub(PlayerHelper, 'getPlayerList')

  let element
  beforeEach(async () => {})

  it('should render 8 ranking lines', async () => {
    playersList = [
      { userName: 'pepe', highScore: 5 },
      { userName: 'rr', highScore: 6 },
      { userName: 'fwertr', highScore: 7 }
    ]
    getPlayerListStub.returns(playersList)

    element = await fixture(
      html`<ranking-table-component></ranking-table-component>`
    )

    const rankingLineComponentElArray = element.shadowRoot.querySelectorAll(
      'ranking-line-component'
    )
    expect(rankingLineComponentElArray.length).to.equal(playersList.length)
  })

  it('should render 0 ranking lines', async () => {
    playersList = []
    getPlayerListStub.returns(playersList)

    element = await fixture(
      html`<ranking-table-component></ranking-table-component>`
    )

    const rankingLineComponentElArray = element.shadowRoot.querySelectorAll(
      'ranking-line-component'
    )
    expect(rankingLineComponentElArray.length).to.equal(playersList.length)
  })
})
