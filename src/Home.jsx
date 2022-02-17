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
      </ul>
    </>
  )
}

export default Home
