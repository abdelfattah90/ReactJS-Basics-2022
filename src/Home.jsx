import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container mx-auto px-4 m-3'>
      <p className='text-2xl'>Main Concepts</p>
      <ul className='list-disc'>
        <li className='p-2 text-blue-500'>
          <Link to='/components-props'>Components and Props</Link>
        </li>
      </ul>
      <ul className='list-disc'>
        <li className='p-2 text-blue-500'>
          <Link to='/state-lifecycle'>State and Lifecycle</Link>
        </li>
      </ul>

      <p className='text-2xl'>Examples:</p>
      <ul className='list-disc'>
        <li className='p-2 text-blue-500'>
          <Link to='/ex1'>useState, Destructuring, Map</Link>
        </li>
        <li className='p-2 text-blue-500'>
          <Link to='/ex2'>Counter</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
