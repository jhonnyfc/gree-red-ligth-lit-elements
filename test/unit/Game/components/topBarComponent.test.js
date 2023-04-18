import { html } from 'lit'
import { fixture, expect, oneEvent } from '@open-wc/testing'
import '../../../../src/Game/components/topBarComponent.js'

describe('TopBarComponent', () => {
  let element

  const userName = 'pepe'

  beforeEach(async () => {
    element = await fixture(html`<top-bar-component
      .userName=${userName}
    ></top-bar-component>`)
  })

  it('should renders a span with userName', () => {
    const userNameEl = element.shadowRoot.querySelector('.user-name')
    expect(userNameEl).to.exist
    expect(userNameEl.textContent).to.contain(userName)
  })

  it('should emit exit event on icno click', async () => {
    const listener = oneEvent(element, 'gameExit')

    const exitIconEl = element.shadowRoot.querySelector('.exit-icon')
    expect(exitIconEl).to.exist
    exitIconEl.click()

    const evetn = await listener

    expect(evetn).to.exist
  })
})
