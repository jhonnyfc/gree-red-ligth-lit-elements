import { LocalStorageHelper } from './localStorageHelper.js'

export class PlayerHelper {
  static CURRENT_PALYER = 'CURRENT_PALYER'

  static createPlayer(userName) {
    const userData = { highScore: 0, score: 0 }
    LocalStorageHelper.setItem(userName, userData)
  }

  static getPlayer(userName) {
    const userData = LocalStorageHelper.getItem(userName)

    if (!userData) {
      return { highScore: 0, score: 0 }
    }
    return userData
  }

  static updatePlayer(userName, score) {
    const userData = PlayerHelper.getPlayer(userName)

    if (userData.highScore < score) {
      userData.highScore = score
    }

    userData.score = score

    LocalStorageHelper.setItem(userName, userData)
  }

  static setCurrentPlayer(userName) {
    LocalStorageHelper.setItem(PlayerHelper.CURRENT_PALYER, userName)
  }

  static getCurrentPaly() {
    return LocalStorageHelper.getItem(PlayerHelper.CURRENT_PALYER)
  }

  static removeCurrentPlayer() {
    LocalStorageHelper.removeItem(PlayerHelper.CURRENT_PALYER)
  }
}
