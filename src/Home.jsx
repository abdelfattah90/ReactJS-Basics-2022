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
      </ul>
    </>
  )
}

export default Home
