import { html } from 'lit'
import { fixture, expect, assert } from '@open-wc/testing'
import sinon from 'sinon'
import { Router } from '@vaadin/router'
import { PlayerHelper } from '../../../../src/shared/helpers/playerHelper.js'
import '../../../../src/Home/view/homeView.js'

describe('GameView', () => {
  let goSpy
  let createPlayerSpy
  let setCurrentPlayerSpy

  let element

  beforeEach(async () => {
    element = await fixture(html`<home-view></home-view>`)
    if (goSpy) goSpy.restore()
    if (createPlayerSpy) createPlayerSpy.restore()
    if (setCurrentPlayerSpy) setCurrentPlayerSpy.restore()
  })

  it('should renders input-field-component', () => {
    const inputFieldComponentEl = element.shadowRoot.querySelector(
      'input-field-component'
    )
    expect(inputFieldComponentEl).to.exist
  })

  it('should renders button-component', () => {
    const buttonComponentEl =
      element.shadowRoot.querySelector('button-component')
    expect(buttonComponentEl).to.exist
  })

  it('should go to game view', async () => {
    goSpy = sinon.spy(Router, 'go')
    createPlayerSpy = sinon.spy(PlayerHelper, 'createPlayer')
    setCurrentPlayerSpy = sinon.spy(PlayerHelper, 'setCurrentPlayer')

    element = await fixture(html`<home-view></home-view>`)

    element.userName = 'pep'
    element._joinGame()

    assert(goSpy.calledOnce)
    assert(createPlayerSpy.calledOnce)
    assert(setCurrentPlayerSpy.calledOnce)
  })

  it('should go to game view', async () => {
    goSpy = sinon.spy(Router, 'go')
    createPlayerSpy = sinon.spy(PlayerHelper, 'createPlayer')
    setCurrentPlayerSpy = sinon.spy(PlayerHelper, 'setCurrentPlayer')

    element = await fixture(html`<home-view></home-view>`)

    element.userName = ''
    element._joinGame()

    assert.isNotOk(goSpy.calledOnce)
    assert.isNotOk(createPlayerSpy.calledOnce)
    assert.isNotOk(setCurrentPlayerSpy.calledOnce)
  })
})
