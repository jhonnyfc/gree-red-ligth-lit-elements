import { html } from 'lit'
import { fixture, expect } from '@open-wc/testing'
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
})
