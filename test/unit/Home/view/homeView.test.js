import { html } from 'lit'
import { fixture, expect, assert } from '@open-wc/testing'
import sinon from 'sinon'
import { Router } from '@vaadin/router'
import '../../../../src/Home/view/homeView.js'

describe('GameView', () => {
  let goSpy

  let element

  beforeEach(async () => {
    element = await fixture(html`<home-view></home-view>`)
    if (goSpy) goSpy.restore()
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

    element = await fixture(html`<home-view></home-view>`)

    element.userName = 'pep'
    element._joinGame()

    assert(goSpy.calledOnce)
  })

  it('should go to game view', async () => {
    goSpy = sinon.spy(Router, 'go')

    element = await fixture(html`<home-view></home-view>`)

    element.userName = ''
    element._joinGame()

    assert.isNotOk(goSpy.calledOnce)
  })
})
