import React, { useState } from 'react'

export const ControlledForm = ({ initialName, initialAge, initialHairColor }) => {
  const [name, setName] = useState(initialName)
  const [age, setAge] = useState(initialAge)
  const [hairColor, setHairColor] = useState(initialHairColor)

  const handleSubmit = e => {
    console.log('Name:', name)
    console.log('Age:', age)
    console.log('Hair Color:', hairColor)

    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input name="age" type="number" placeholder="Age" value={age} onChange={(e) => setAge(Number(e.target.value))} />
      <input name="hairColor" type="text" placeholder="Hair Color" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  )
}

