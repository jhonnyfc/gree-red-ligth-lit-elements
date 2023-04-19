import { expect } from '@open-wc/testing'
import '../../../../src/Game/components/topBarComponent.js'
import { GameHelper } from '../../../../src/Game/helper/gameHelper.js'

describe('GameHelper', () => {
  let setp
  let isGreen

  it('should have 3 ponits when is green', () => {
    isGreen = true
    const gameHelper = new GameHelper(0)

    setp = 'rigth'
    gameHelper.controlStep(setp, isGreen)
    setp = 'left'
    gameHelper.controlStep(setp, isGreen)
    setp = 'rigth'
    gameHelper.controlStep(setp, isGreen)

    expect(gameHelper.score).to.equal(3)
  })

  it('should have 0 ponits when is green', () => {
    isGreen = true
    const gameHelper = new GameHelper(0)

    setp = 'rigth'
    gameHelper.controlStep(setp, isGreen)
    setp = 'left'
    gameHelper.controlStep(setp, isGreen)
    gameHelper.controlStep(setp, isGreen)
    gameHelper.controlStep(setp, isGreen)

    expect(gameHelper.score).to.equal(0)
  })

  it('should rest score when is not green', () => {
    const gameHelper = new GameHelper(0)

    isGreen = true
    setp = 'rigth'
    gameHelper.controlStep(setp, isGreen)
    setp = 'left'
    gameHelper.controlStep(setp, isGreen)
    expect(gameHelper.score).to.equal(2)
    isGreen = false
    gameHelper.controlStep(setp, isGreen)
    expect(gameHelper.score).to.equal(0)
  })

  it('should return 3000 mills if is not green', () => {
    const gameHelper = new GameHelper(0)

    isGreen = false
    expect(gameHelper.calcSleepMillis(isGreen)).to.equal(3000)
  })
})
