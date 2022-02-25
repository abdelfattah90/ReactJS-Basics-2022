import React from 'react'
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            className='border border-black-500 '
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input className='btn-primary' type='submit' value='Submit' />
      </form>
    )
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'Green' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select
            className='border border-black-500 '
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value='Green'>Green</option>
            <option value='Yallow'>Yallow</option>
            <option value='Red'>Red</option>
            <option value='Black'>Black</option>
          </select>
        </label>
        <input className='btn-primary' type='submit' value='Submit' />
      </form>
    )
  }
}
function Forms() {
  return (
    <div className='container mx-auto px-4 m-3'>
      <p className='text-2xl'>Forms</p>

      <NameForm />
      <FlavorForm />
      <br />
      <p>
        HTML form elements work a bit differently from other DOM elements in
        React, because form elements naturally keep some internal state. For
        example, this form in plain HTML accepts a single name:
      </p>

      <p>
        This form has the default HTML form behavior of browsing to a new page
        when the user submits the form. If you want this behavior in React, it
        just works. But in most cases, it’s convenient to have a JavaScript
        function that handles the submission of the form and has access to the
        data that the user entered into the form. The standard way to achieve
        this is with a technique called “controlled components”.
      </p>
      <p>Controlled Components</p>

      <p>
        In HTML, form elements such as input, textarea, and select typically
        maintain their own state and update it based on user input. In React,
        mutable state is typically kept in the state property of components, and
        only updated with setState.
      </p>

      <p>
        We can combine the two by making the React state be the “single source
        of truth”. Then the React component that renders a form also controls
        what happens in that form on subsequent user input. An input form
        element whose value is controlled by React in this way is called a
        “controlled component”.
      </p>
    </div>
  )
}

export default Forms
