import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container mx-auto  px-4 m-3'>
      <p className='p-2'>
        <Link className='p-4' to='/'>
          Home
        </Link>
      </p>
      <p className='p-2'>
        <Link className='p-4' to='/ex1'>
          useState, Destructuring, Map
        </Link>
      </p>
      <p className='p-2'>
        <Link className='p-4' to='/ex2'>
          state, props
        </Link>
      </p>
      <p className='p-2'>
        <Link className='p-4' to='/ex3'>
          Counter
        </Link>
      </p>
    </div>
  )
}

export default Home
