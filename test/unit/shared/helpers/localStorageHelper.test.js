import { expect } from '@open-wc/testing'
import { LocalStorageHelper } from '../../../../src/shared/helpers/localStorageHelper.js'

describe('LocalStorageHelper', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should save data and load data parsed', () => {
    const key = 'someKey'
    const someData = { hola: 'hola' }
    LocalStorageHelper.setItem(key, someData)

    expect(LocalStorageHelper.getItem(key)).to.deep.equal(someData)
  })

  it('should remove item from localStorege', async () => {
    const key = 'someKey'
    const someData = { hola: 'hola' }
    LocalStorageHelper.setItem(key, someData)

    LocalStorageHelper.removeItem(key)

    expect(localStorage.length).to.equal(0)
  })

  it('should clear localSotrage', async () => {
    const key = 'someKey'
    const key2 = 'someKey2'
    const someData = { hola: 'hola' }
    LocalStorageHelper.setItem(key, someData)
    LocalStorageHelper.setItem(key2, someData)

    LocalStorageHelper.clear(key)

    expect(localStorage.length).to.equal(0)
  })
})
