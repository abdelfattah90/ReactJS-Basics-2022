import React from 'react'
import StateAndLifecycleImg from './StateAndLifecycle.png'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <p className='p-2 text-blue-500'>
        {this.state.date.toLocaleTimeString()}
      </p>
    )
  }
}

function StateAndLifecycle() {
  return (
    <div className='container mx-auto px-4 m-3'>
      <p className='text-2xl text-center'>State and Lifecycle</p>
      <Clock />
      <img src={StateAndLifecycleImg} alt='' />
      <ul className='list-disc'>
        <li className='p-2 text-gray-500'>
          When Clock is passed to ReactDOM.render(), React calls the constructor
          of the Clock component. Since Clock needs to display the current time,
          it initializes this.state with an object including the current time.
          We will later update this state.
        </li>
      </ul>
      <ul className='list-disc'>
        <li className='p-2 text-gray-500'>
          React then calls the Clock component’s render() method. This is how
          React learns what should be displayed on the screen. React then
          updates the DOM to match the Clock’s render output.
        </li>
      </ul>
      <ul className='list-disc'>
        <li className='p-2 text-gray-500'>
          When the Clock output is inserted in the DOM, React calls the
          componentDidMount() lifecycle method. Inside it, the Clock component
          asks the browser to set up a timer to call the component’s tick()
          method once a second.
        </li>
      </ul>
      <ul className='list-disc'>
        <li className='p-2 text-gray-500'>
          Every second the browser calls the tick() method. Inside it, the Clock
          component schedules a UI update by calling setState() with an object
          containing the current time. Thanks to the setState() call, React
          knows the state has changed, and calls the render() method again to
          learn what should be on the screen. This time, this.state.date in the
          render() method will be different, and so the render output will
          include the updated time. React updates the DOM accordingly.
        </li>
      </ul>
      <ul className='list-disc'>
        <li className='p-2 text-gray-500'>
          If the Clock component is ever removed from the DOM, React calls the
          componentWillUnmount() lifecycle method so the timer is stopped.
        </li>
      </ul>
    </div>
  )
}

export default StateAndLifecycle
