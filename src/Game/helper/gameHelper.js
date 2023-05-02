import { PlayerHelper } from '../../shared/helpers/playerHelper.js'

export class GameHelper {
  constructor(score, userName) {
    this.score = score
    this.previusStep = ''
    this.userName = userName
  }

  controlStep(step, isGreen) {
    if (!isGreen) {
      this._resetScore()
    }

    if (isGreen) {
      if (step !== this.previusStep) {
        this._addStep()
      }

      if (step === this.previusStep) {
        this._substracStep()
      }
    }

    this.previusStep = step
    PlayerHelper.updatePlayer(this.userName, this.score)

    return this.score
  }

  _addStep() {
    this.score += 1
  }

  _substracStep() {
    if (this.score === 0) {
      return
    }
    this.score -= 1
  }

  _resetScore() {
    this.score = 0
  }

  calcSleepMillis(isGreen) {
    if (typeof isGreen !== 'boolean') {
      throw Error('GameHelper - calcSleepMillis: isGreen should be Boolean')
    }

    if (!isGreen) {
      return 3000
    }

    return Math.max(10000 - this.score * 100, 2000) + Math.random(-1500, 1500)
  }
}
