import { getUrlWithParamsConfig } from '../src/utils'

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента: getPokemons и {name} объект. На выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Piachu' })

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru/api/v1',
      pathname: 'pokemons',
      query: { name: 'Piachu' },
    })
  })
  test('Должна принимать два аргумента: getPokemons и {id} объект. На выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 })

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru/api/v1',
      pathname: 'pokemon/25',
      query: {},
    })
  })
})
