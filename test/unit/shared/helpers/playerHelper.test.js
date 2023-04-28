import { expect } from '@open-wc/testing'
import sinon from 'sinon'
import { PlayerHelper } from '../../../../src/shared/helpers/playerHelper.js'

describe('PlayerHelper', () => {
  let fackeStorage = {}

  sinon.stub(localStorage, 'getItem').callsFake((key) => fackeStorage[key])
  sinon.stub(localStorage, 'setItem').callsFake((key, value) => {
    fackeStorage[key] = value
  })
  sinon.stub(localStorage, 'removeItem').callsFake((key) => {
    const { [key]: removedProperty, ...remainingObject } = fackeStorage
    fackeStorage = { ...remainingObject }
  })
  sinon.stub(localStorage, 'clear').callsFake(() => {
    fackeStorage = {}
  })

  beforeEach(() => {
    localStorage.clear()
  })

  it('should create player with empty score data and get it', () => {
    const userName = 'someNAme'
    PlayerHelper.createPlayer(userName)

    expect(PlayerHelper.getPlayer(userName)).to.deep.equal({
      highScore: 0,
      score: 0,
      userName
    })
  })

  it('should get undefined palyer if did not exits', () => {
    const userName = 'someNAme'

    expect(PlayerHelper.getPlayer(userName)).to.deep.equal()
  })

  it('should  update palay data if score is greater than highScore', () => {
    const userName = 'someNAme'
    const score = 5
    PlayerHelper.createPlayer(userName)

    PlayerHelper.updatePlayer(userName, score)

    expect(PlayerHelper.getPlayer(userName)).to.deep.equal({
      highScore: 5,
      score: 5,
      userName
    })
  })

  it('should  update palay data if score is lower than highScore', () => {
    const userName = 'someNAme'
    const firstScore = 5
    PlayerHelper.createPlayer(userName)
    PlayerHelper.updatePlayer(userName, firstScore)

    const secondScore = 2
    PlayerHelper.updatePlayer(userName, secondScore)

    expect(PlayerHelper.getPlayer(userName)).to.deep.equal({
      highScore: firstScore,
      score: secondScore,
      userName
    })
  })

  it('should  save and get current player', () => {
    const userName = 'someNAme'

    PlayerHelper.setCurrentPlayer(userName)
    expect(PlayerHelper.getCurrentPlayer()).to.equal(userName)
  })

  it('should  save and remove current player', () => {
    const userName = 'someNAme'

    PlayerHelper.setCurrentPlayer(userName)
    PlayerHelper.removeCurrentPlayer()

    expect(PlayerHelper.getCurrentPlayer()).to.equal(undefined)
  })
})
