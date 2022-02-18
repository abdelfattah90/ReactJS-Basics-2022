import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container mx-auto  px-4 m-3'>
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
      </ul>
    </div>
  )
}

export default Home
