import axios from 'axios'

import { UserLoader } from './UserLoader'
import { ResourceLoader } from './ResourceLoader'
import { UserInfo } from './UserInfo'
import { DataLoader } from './DataLoader'

const getServerData = url => async () => {
  const response = await axios.get(url)
  return response.data
}

function App() {

  return (
    <>
      <DataLoader
        getDataFn={getServerData(`/api/users/345`)}
        resourceName='user'
      >
        <UserInfo />
      </DataLoader>
      <ResourceLoader
        resourceUrl={`/api/users/123`}
        resourceName='user'
      >
        <UserInfo />
      </ResourceLoader>
      <UserLoader userId='234'>
        <UserInfo />
      </UserLoader>
    </>
  )
}

export default App
