import { useState } from 'react'

const Ex2 = () => {
  const [count, setCount] = useState(0)
  const add = () => setCount((prevCount) => prevCount + 1)
  const sub = () => setCount((prevCount) => prevCount - 1)
  return (
    <div className='container mx-auto px-4 m-3'>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button className='btn btn-primary' onClick={add}>
        +
      </button>
      <button className='btn btn-secondary' onClick={sub}>
        -
      </button>
      <h2>
        Note: If you ever need the old value of state to help you determine the
        new value of state, You should pass a callback function to your state
        setter function instead of using state directly. This callback function
        will receive the old value of state as parameter, which you can then use
        to determine your new value of state.
      </h2>
      <a href='https://reactjs.org/docs/hooks-state.html'>Hooks State</a>
    </div>
  )
}

export default Ex2
