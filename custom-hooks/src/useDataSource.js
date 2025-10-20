import { useState, useEffect } from 'react'

export const useDataSource = getResourceFn => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFn();
      setData(result.data)
      setIsLoading(false)
    })()
  }, [getResourceFn])

  return { isLoading, data }
}

