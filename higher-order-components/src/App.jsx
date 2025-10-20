import { printProps } from './printProps'
import { UserInfo } from './UserInfo'
import { withUser } from './withUser'

const UserInfoWrappedV1 = printProps(UserInfo)
const UserInfoWrappedV2 = withUser(UserInfo)

function App() {

  return (
    <>
      <UserInfoWrappedV1 user={{ name: 'Shaun', age: 23, hairColor: 'black', hobbies: ['swimming'] }} />
      <UserInfoWrappedV2 />
    </>
  )
}

export default App
