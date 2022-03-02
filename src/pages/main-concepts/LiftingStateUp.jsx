import React from 'react'

function LiftingStateUp() {
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
  }

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
      return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
  }

  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
  }

  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
      this.props.onTemperatureChange(e.target.value)
    }

    render() {
      const temperature = this.props.temperature
      const scale = this.props.scale
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input
            className='border border-black'
            value={temperature}
            onChange={this.handleChange}
          />
        </fieldset>
      )
    }
  }

  class Calculator extends React.Component {
    constructor(props) {
      super(props)
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
      this.state = { temperature: '', scale: 'c' }
    }

    handleCelsiusChange(temperature) {
      this.setState({ scale: 'c', temperature })
    }

    handleFahrenheitChange(temperature) {
      this.setState({ scale: 'f', temperature })
    }

    render() {
      const scale = this.state.scale
      const temperature = this.state.temperature
      const celsius =
        scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
      const fahrenheit =
        scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

      return (
        <div>
          <TemperatureInput
            scale='c'
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange}
          />
          <TemperatureInput
            scale='f'
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange}
          />
          <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
      )
    }
  }

  return (
    <div className='container mx-auto px-4 m-3'>
      <Calculator />
      <p className='text-2xl'>Lessons Learned</p>
      <p>
        - There should be a single “source of truth” for any data that changes
        in a React application. Usually, the state is first added to the
        component that needs it for rendering. Then, if other components also
        need it, you can lift it up to their closest common ancestor. Instead of
        trying to sync the state between different components, you should rely
        on the top-down data flow.
      </p>
      <p>
        - Lifting state involves writing more “boilerplate” code than two-way
        binding approaches, but as a benefit, it takes less work to find and
        isolate bugs. Since any state “lives” in some component and that
        component alone can change it, the surface area for bugs is greatly
        reduced. Additionally, you can implement any custom logic to reject or
        transform user input.
      </p>
      <p>
        - If something can be derived from either props or state, it probably
        shouldn’t be in the state. For example, instead of storing both
        celsiusValue and fahrenheitValue, we store just the last edited
        temperature and its scale. The value of the other input can always be
        calculated from them in the render() method. This lets us clear or apply
        rounding to the other field without losing any precision in the user
        input.
      </p>
      <p>
        - When you see something wrong in the UI, you can use React Developer
        Tools to inspect the props and move up the tree until you find the
        component responsible for updating the state.
      </p>
      <p>- Try!! Trace the bugs to their source in console</p>
    </div>
  )
}

export default LiftingStateUp
