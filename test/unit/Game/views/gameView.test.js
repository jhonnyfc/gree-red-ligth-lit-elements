import { html } from 'lit'
import { fixture, expect, assert, aTimeout } from '@open-wc/testing'
import sinon from 'sinon'
import { Router } from '@vaadin/router'
import '../../../../src/Game/views/gameView.js'
import { PlayerHelper } from '../../../../src/shared/helpers/playerHelper.js'

describe('GameView', () => {
  let element
  const playerMock = { score: 0, highScore: 0, userName: 'olo' }

  function fn() {}

  sinon.replace(PlayerHelper, 'getCurrentPlayer', sinon.fake(fn))
  sinon.replace(
    PlayerHelper,
    'getPlayer',
    sinon.fake(() => playerMock)
  )
  sinon.replace(PlayerHelper, 'updatePlayer', sinon.fake(fn))
  sinon.replace(PlayerHelper, 'removeCurrentPlayer', sinon.fake(fn))

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
    expect(element.isPlaying).to.equal(false)
  })

  it('shooudl contrl stpec click', async () => {
    element = await fixture(html`<game-view></game-view>`)

    playerMock.highScore = 55
    const controlStepSpy = sinon.spy(element.gameHelper, 'controlStep')
    element.isGreen = true
    element._stepClick({ detail: 'left' })

    assert(controlStepSpy.calledWith('left', true))
    expect(element.highScore).to.equal(playerMock.highScore)
  })
})
