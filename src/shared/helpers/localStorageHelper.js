export class LocalStorageHelper {
  static CURRENT_PALYER = 'CURRENT_PALYER'

  static setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  static getItem(key) {
    const data = localStorage.getItem(key)

    if (!data) {
      return
    }
    // eslint-disable-next-line
    return JSON.parse(data)
  }

  static removeItem(key) {
    localStorage.removeItem(key)
  }

  static clear() {
    localStorage.clear()
  }
}
