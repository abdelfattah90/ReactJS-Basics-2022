import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container mx-auto px-4 m-3'>
      <p className='text-2xl'>Main Concepts</p>
      <ol className='list-decimal'>
        <li className='p-2 text-blue-500'>
          <Link to='/components-props'>Components and Props</Link>
        </li>
        <li className='p-2 text-blue-500'>
          <Link to='/state-lifecycle'>State and Lifecycle</Link>
        </li>
        <li className='p-2 text-blue-500'>
          <Link to='/handling-events'>Handling Events</Link>
        </li>
        <li className='p-2 text-blue-500'>
          <Link to='/conditional-rendering'>Conditional Rendering</Link>
        </li>
        <li className='p-2 text-blue-500'>
          <Link to='/lists-and-keys'>Lists and Keys</Link>
        </li>
        <li className='p-2 text-blue-500'>
          <Link to='/forms'>Forms</Link>
        </li>
      </ol>

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
