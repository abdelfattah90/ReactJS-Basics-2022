import { useState } from 'react'

const Ex3 = () => {
  const [count, setCount] = useState([0])
  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button>-</button>
      <button>+</button>
    </div>
  )
}

export default Ex3
