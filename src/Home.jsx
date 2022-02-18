import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/ex1'>useState, Destructuring, Map</Link>
        </li>
        <li>
          <Link to='/ex2'>state, props</Link>
        </li>
        <li>
          <Link to='/ex3'>Counter</Link>
        </li>
        <li>
          <Link to='/ex4'>4</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
