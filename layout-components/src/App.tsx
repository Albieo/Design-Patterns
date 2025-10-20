// import { SplitScreen } from './SplitScreen'
// import { ProductsList } from './ProductsList'
import { RegularList } from './RegularList'
import { LargePersonListItem } from './LargePersonListItem'
import { SmallPersonListItem } from './SmallPersonListItem'
import { Modal } from './Modal'

//const LeftHandComponent = () => {
//  return <h1 style={{ backgroundColor: 'green' }}>Left!</h1>
//}

//const RightHandComponent = () => {
//  return <p style={{ backgroundColor: 'red' }}>Right</p>
//}
//
const people = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'cycling', 'video games'],
}, {
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics'],
}, {
  name: 'Jane Garcia',
  age: '27',
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}]


//const products = [{
//  name: 'Flat-Screen TV',
//  price: '$300',
//  description: 'Huge LCD screen, a great deal',
//  rating: 4.1
//}, {
//  name: 'Gloves',
//  price: '$10',
//  description: 'Just like the pros use',
//  rating: 3.8
//}, {
//  name: 'Running Shoes',
//  price: '$120',
//  description: 'State-of-the-art technology for optimum running',
//  rating: 4.2
//}]

function App() {

  return (
    <>
      {/* <ProductsList products={products} /> */}
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />

      <Modal>
        <LargePersonListItem person={people[0]} />
      </Modal>
    </>
  )
}

export default App
