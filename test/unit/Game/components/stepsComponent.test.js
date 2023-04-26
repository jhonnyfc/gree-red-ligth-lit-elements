import { html } from 'lit'
import { fixture, expect, oneEvent } from '@open-wc/testing'
import '../../../../src/Game/components/stepsComponent.js'

describe('StepsComponent', () => {
  let element

  beforeEach(async () => {
    element = await fixture(html`<steps-component></steps-component>`)
  })

  it('should emit stpe left event on button click', async () => {
    const listener = oneEvent(element, 'playerStep')

    const leftStepEl = element.shadowRoot.querySelector('.step-left')
    expect(leftStepEl).to.exist
    leftStepEl.click()

    const { detail } = await listener

    expect(detail).to.equal('left')
  })

  it('should emit stpe right event on button click', async () => {
    const listener = oneEvent(element, 'playerStep')

    const rightStepEl = element.shadowRoot.querySelector('.step-right')
    expect(rightStepEl).to.exist
    rightStepEl.click()

    const { detail } = await listener

    expect(detail).to.equal('right')
  })
})
