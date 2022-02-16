import { useState } from 'react'
import { Link } from 'react-router-dom'
function Ex1() {
  const [items, setItems] = useState([])
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`
    setItems((prevState) => [...prevState, newItem])
  }
  const itemElements = items.map((item) => <p key={item}>{item}</p>)
  return (
    <>
      <Link to='/'>Home</Link>

      <h2>useState, Destructuring, Map</h2>
      <button onClick={addItem}>Add</button>
      {itemElements}
    </>
  )
}

export default Ex1
