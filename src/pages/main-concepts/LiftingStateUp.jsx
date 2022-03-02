function LiftingStateUp() {
  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
  }

  return (
    <>
      <BoilingVerdict />
    </>
  )
}

export default LiftingStateUp
