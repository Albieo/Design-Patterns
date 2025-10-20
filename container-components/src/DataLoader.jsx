import React, { useState, useEffect } from 'react'

export const DataLoader = ({ children, getDataFn = () => { }, resourceName }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const newData = await getDataFn()
      setData(newData)
    })()
  }, [])

  return (
    data && React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { [resourceName]: data })
      }

      return child;
    })
  )
}
