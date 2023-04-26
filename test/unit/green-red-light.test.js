import { html } from 'lit'
import { fixture, expect } from '@open-wc/testing'

import '../../src/green-red-light.js'

describe('GreenRedLight', () => {
  let element
  beforeEach(async () => {
    element = await fixture(html`<green-red-light></green-red-light>`)
  })

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible()
  })
})
