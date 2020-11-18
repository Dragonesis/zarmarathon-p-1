import { typeMethods } from '../types/typeMethods'

interface IConfig {
  client: {
    server: {
      protocol: 'http' | 'https'
      host: string
    }
    endpoints: {
      getPokemons: {
        method: typeMethods
        uri: {
          pathname: string
        }
      }
    }
  }
}

export const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru/api/v1',
    },
    endpoints: {
      getPokemons: {
        method: 'get',
        uri: {
          pathname: 'pokemons',
        },
      },
    },
  },
}

export default config
