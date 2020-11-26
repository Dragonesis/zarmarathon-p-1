import { config } from '../config'

function getUrlWithParamsConfig(endpoint: string, query: any) {
  const url = {
    ...config.client.server,
    ...config.client.endpoints[endpoint as keyof typeof config.client.endpoints].uri,
    query: {},
  }
  const ownQuery = {
    ...query,
  }

  const pathname = Object.keys(ownQuery).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, ownQuery[val])
      delete ownQuery[val]
      return result
    }
    return acc
  }, url.pathname)

  url.pathname = pathname
  url.query = {
    ...ownQuery,
  }

  return url
}

export default getUrlWithParamsConfig
