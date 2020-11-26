import Url from 'url'
import { getUrlWithParamsConfig } from '.'

async function req(endpoint: string, query: object) {
  const url = Url.format(getUrlWithParamsConfig(endpoint, query))
  return fetch(url).then((res) => res.json())
}

export default req
