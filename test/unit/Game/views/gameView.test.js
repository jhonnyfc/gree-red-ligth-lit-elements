import { html } from 'lit'
import { fixture, expect, assert, aTimeout } from '@open-wc/testing'
import sinon from 'sinon'
import { Router } from '@vaadin/router'
import '../../../../src/Game/views/gameView.js'

describe('GameView', () => {
  let element

  beforeEach(async () => {
    element = await fixture(html`<game-view></game-view>`)
  })

  it('should renders top-bar-component', () => {
    const topBarComponentEl =
      element.shadowRoot.querySelector('top-bar-component')
    expect(topBarComponentEl).to.exist
  })

  it('should renders steps-component', () => {
    const stepsComponentEl = element.shadowRoot.querySelector('steps-component')
    expect(stepsComponentEl).to.exist
  })

  it('should exit from game view', async () => {
    const goSpy = sinon.spy(Router, 'go')

    element = await fixture(html`<game-view></game-view>`)
    element._exitGame()

    await aTimeout(500)

    assert(goSpy.calledOnce)
  })
})
