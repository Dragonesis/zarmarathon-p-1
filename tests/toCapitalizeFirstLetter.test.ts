import { toCapitalizeFirstLetter } from '../src/utils'

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать один аргумент строку или undefined. На выходе получаем строку с заглавной буквы', () => {
    const str = toCapitalizeFirstLetter('some string')
    const str2 = toCapitalizeFirstLetter(undefined)

    expect(str).toBe('Some string')
    expect(str2).toBe(undefined)
  })
})
