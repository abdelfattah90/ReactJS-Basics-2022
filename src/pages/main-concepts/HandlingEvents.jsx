function HandlingEvents() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('You clicked submit')
  }
  return (
    <div className='container mx-auto px-4 m-3'>
      <p className='text-2xl text-center'>HandlingEvents</p>

      <p>onSubmit - Form - e.preventDefault() - console</p>
      <form onSubmit={handleSubmit}>
        <button className='btn btn-primary' type='submit'>
          Click
        </button>
      </form>
    </div>
  )
}

export default HandlingEvents
