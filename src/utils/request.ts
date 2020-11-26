import Url from 'url'
import { getUrlWithParamsConfig } from '.'

async function req<T>(endpoint: string, query: object): Promise<T> {
  const url = Url.format(getUrlWithParamsConfig(endpoint, query))
  return fetch(url).then((res) => res.json())
}

export default req
