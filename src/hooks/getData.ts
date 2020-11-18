import { useEffect, useState } from 'react'
import { req } from '../utils'

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<T>()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [isError, setError] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const body = await req(endpoint, query)
        setData(body)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, deps)

  return {
    data,
    isLoading,
    isError,
  }
}

export default useData
