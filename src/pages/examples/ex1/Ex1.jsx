import { useState } from 'react'
function Ex1() {
  const [items, setItems] = useState([])
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`
    setItems((prevState) => [...prevState, newItem])
  }
  const itemElements = items.map((item) => <p key={item}>{item}</p>)

  return (
    <div className='container mx-auto px-4 m-3'>
      <p>useState, Destructuring, Map</p>
      <button className='btn btn-primary' onClick={addItem}>
        Add Item
      </button>
      {itemElements}
    </div>
  )
}

export default Ex1
