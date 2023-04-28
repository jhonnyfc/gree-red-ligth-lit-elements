import { LocalStorageHelper } from './localStorageHelper.js'

export class PlayerHelper {
  static CURRENT_PALYER = 'CURRENT_PALYER'

  static PLAYERS_LIST = 'PLAYERS_LIST'

  static createPlayer(userName) {
    if (PlayerHelper.getPlayer(userName)) {
      return
    }

    const playerList = PlayerHelper.getPlayerList()
    playerList.push({ highScore: 0, score: 0, userName })

    PlayerHelper.setPlayerList(playerList)
  }

  static getPlayer(userName) {
    const playerList = PlayerHelper.getPlayerList()

    return playerList.find((player) => player.userName === userName)
  }

  static updatePlayer(userName, score) {
    const playerList = PlayerHelper.getPlayerList()

    const playerIndex = playerList.findIndex(
      (player) => player.userName === userName
    )

    if (Number.isNaN(playerIndex)) {
      return
    }

    if (playerList[playerIndex].highScore < score) {
      playerList[playerIndex].highScore = score
    }

    playerList[playerIndex].score = score

    PlayerHelper.setPlayerList(playerList)
  }

  static getPlayerList() {
    const playerList = LocalStorageHelper.getItem(PlayerHelper.PLAYERS_LIST)

    if (!playerList?.length) {
      return []
    }

    return playerList
  }

  static setPlayerList(playerList) {
    LocalStorageHelper.setItem(PlayerHelper.PLAYERS_LIST, playerList)
  }

  static setCurrentPlayer(userName) {
    LocalStorageHelper.setItem(PlayerHelper.CURRENT_PALYER, userName)
  }

  static getCurrentPlayer() {
    return LocalStorageHelper.getItem(PlayerHelper.CURRENT_PALYER)
  }

  static removeCurrentPlayer() {
    LocalStorageHelper.removeItem(PlayerHelper.CURRENT_PALYER)
  }
}
