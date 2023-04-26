import { expect } from '@open-wc/testing'
import '../../../../src/Game/components/topBarComponent.js'
import { GameHelper } from '../../../../src/Game/helper/gameHelper.js'

describe('GameHelper', () => {
  let step
  let isGreen

  it('should have 3 points when is green', () => {
    isGreen = true
    const gameHelper = new GameHelper(0)

    step = 'rigth'
    gameHelper.controlStep(step, isGreen)
    step = 'left'
    gameHelper.controlStep(step, isGreen)
    step = 'rigth'
    gameHelper.controlStep(step, isGreen)

    expect(gameHelper.score).to.equal(3)
  })

  it('should not have less than 0 points', () => {
    isGreen = true
    const gameHelper = new GameHelper(0)

    step = 'rigth'
    gameHelper.controlStep(step, isGreen)
    step = 'left'
    gameHelper.controlStep(step, isGreen)
    gameHelper.controlStep(step, isGreen)
    gameHelper.controlStep(step, isGreen)

    expect(gameHelper.score).to.equal(0)
  })

  it('should reset the score when is not green', () => {
    const gameHelper = new GameHelper(0)

    isGreen = true
    step = 'rigth'
    gameHelper.controlStep(step, isGreen)
    step = 'left'
    gameHelper.controlStep(step, isGreen)
    expect(gameHelper.score).to.equal(2)
    isGreen = false
    gameHelper.controlStep(step, isGreen)
    expect(gameHelper.score).to.equal(0)
  })

  it('should return 3000 mills if is not green', () => {
    const gameHelper = new GameHelper(0)

    isGreen = false
    expect(gameHelper.calcSleepMillis(isGreen)).to.equal(3000)
  })
})
