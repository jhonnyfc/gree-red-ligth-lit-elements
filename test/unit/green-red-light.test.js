import { html } from 'lit'
import { fixture, expect } from '@open-wc/testing'

import '../../src/green-red-light.js'

describe('GreenRedLight', () => {
  let element
  beforeEach(async () => {
    element = await fixture(html`<green-red-light></green-red-light>`)
  })

  it('should exists query selector', async () => {
    const routerContainer =
      element.shadowRoot.querySelector('#router-container')
    expect(routerContainer).to.exist
  })
})
