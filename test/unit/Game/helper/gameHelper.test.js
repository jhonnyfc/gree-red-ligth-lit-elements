import { expect } from '@open-wc/testing'
import sinon from 'sinon'
import '../../../../src/Game/components/topBarComponent.js'
import { GameHelper } from '../../../../src/Game/helper/gameHelper.js'
import { PlayerHelper } from '../../../../src/shared/helpers/playerHelper.js'

describe('GameHelper', () => {
  let step
  let isGreen

  function updatePlayer() {
    return { fn: () => {} }
  }

  sinon.replace(PlayerHelper, 'updatePlayer', sinon.fake(updatePlayer))

  it('should have 3 ponits when is green', () => {
    isGreen = true
    const gameHelper = new GameHelper(0, 'pedro')

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
    const gameHelper = new GameHelper(0, 'pedro')

    step = 'rigth'
    gameHelper.controlStep(step, isGreen)
    step = 'left'
    gameHelper.controlStep(step, isGreen)
    gameHelper.controlStep(step, isGreen)
    gameHelper.controlStep(step, isGreen)

    expect(gameHelper.score).to.equal(0)
  })

  it('should reset the score when is not green', () => {
    const gameHelper = new GameHelper(0, 'pedro')

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
    const gameHelper = new GameHelper(0, 'pedro')

    isGreen = false
    expect(gameHelper.calcSleepMillis(isGreen)).to.equal(3000)
  })

  it('should throw an error with undefinded isGreen', () => {
    const gameHelper = new GameHelper(0, 'pedro')

    isGreen = undefined

    expect(() => gameHelper.calcSleepMillis(isGreen)).to.throw(
      'GameHelper - calcSleepMillis: isGreen should be Boolean'
    )
  })

  it('should throw an error with string isGreen', () => {
    const gameHelper = new GameHelper(0, 'pedro')

    isGreen = 'lol'

    expect(() => gameHelper.calcSleepMillis(isGreen)).to.throw(
      'GameHelper - calcSleepMillis: isGreen should be Boolean'
    )
  })
})
