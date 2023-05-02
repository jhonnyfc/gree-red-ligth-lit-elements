import { html } from 'lit'
import sinon from 'sinon'
import { fixture, expect } from '@open-wc/testing'
import { Router } from '@vaadin/router'
import { PlayerHelper } from '../../../../src/shared/helpers/playerHelper.js'
import { View } from '../../../../src/shared/constants/view.js'
import '../../../../src/Ranking/views/rankingView.js'

describe('RankingView', () => {
  sinon.stub(PlayerHelper, 'getPlayerList').returns([])

  let element
  let routerGoStub

  beforeEach(async () => {
    element = await fixture(html`<ranking-view></ranking-view>`)
    if (routerGoStub) routerGoStub.restore()
  })

  it('should render ranking-table-component', async () => {
    const rankingTableComponent = element.shadowRoot.querySelector(
      'ranking-table-component'
    )

    expect(rankingTableComponent).to.exist
  })

  it('should call router on exit click', async () => {
    routerGoStub = sinon.stub(Router, 'go')

    const exitIconEl = element.shadowRoot.querySelector('.exit-icon')

    expect(exitIconEl).to.exist

    exitIconEl.click()

    expect(routerGoStub.calledWith({ pathname: View.Home.id })).to.equal(true)
  })
})
