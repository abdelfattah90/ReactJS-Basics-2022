import React from 'react'

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn

    return (
      <>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </>
    )
  }
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <p>Welcome back!</p>
  }
  return <p>Please sign up</p>
}

function LoginButton(props) {
  return (
    <button className='btn btn-primary' onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button className='btn btn-secondary' onClick={props.onClick}>
      Logout
    </button>
  )
}

const messages = ['React', 'Re: React', 'Re:Re: React']

function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  const count = unreadMessages.length
  return (
    <>
      {count && <h1>MessagesIcon: {count}</h1>}
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </>
  )
}

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }

  return <div className='text-red-500'>Warning!</div>
}

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: true }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }))
  }

  render() {
    return (
      <>
        <WarningBanner warn={this.state.showWarning} />
        <button
          className={`btn btn-${
            this.state.showWarning ? 'secondary' : 'primary'
          }`}
          onClick={this.handleToggleClick}
        >
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </>
    )
  }
}

function ConditionalRendering() {
  return (
    <div className='container mx-auto px-4 m-3'>
      <p className='text-2xl text-center'>Conditional Rendering</p>
      <p>Inline If with Logical And Operator</p>
      <p>Inline If-Else with Conditional Operator</p>
      <br />
      <LoginControl />
      <hr />
      <Mailbox unreadMessages={messages} />
      <hr />
      <p>Preventing Component from Rendering - className Template literals</p>
      <Page />
    </div>
  )
}

export default ConditionalRendering
