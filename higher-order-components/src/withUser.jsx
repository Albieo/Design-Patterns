import React, { useState, useEffect } from 'react'

export const withUser = (Component, userId) => {
  return props => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      setUser({ id: userId, name: 'Shaun', age: 12, hairColor: 'Brown', hobbies: ['coding'] })
    }, [])

    if (!user) {
      return <p>Loading...</p>
    }

    return <Component {...props} user={user} />
  }
}
