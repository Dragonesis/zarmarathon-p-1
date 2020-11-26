import { config } from '../config'

function getUrlWithParamsConfig(endpoint: string, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoints[endpoint as keyof typeof config.client.endpoints].uri,
    query: {
      ...query,
    },
  }
  return url
}

export default getUrlWithParamsConfig
