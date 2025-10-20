import { useState, useEffect } from 'react'

export const useResource = url => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(`Loading data from ${url}...`)
    const loadedUser = {
      name: 'John Doe',
      age: 23,
      hairColor: 'black',
      hobbies: ['swimming', 'cycling', 'video games']
    }

    setData(loadedUser)
    setIsLoading(false)
  }, [])

  return { isLoading, data }

}
