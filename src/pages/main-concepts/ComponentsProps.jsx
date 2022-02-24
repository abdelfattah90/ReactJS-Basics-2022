// Rendering a Component
function Welcome(props) {
  return <h1>Good job, {props.name}</h1>
}

// Composing Components
// data
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/128/128',
  },
}
function formatDate(date) {
  return date.toLocaleDateString()
}

// Avatar
function Avatar(props) {
  return <img src={props.user.avatarUrl} alt={props.user.name} />
}
// UserInfo
function UserInfo(props) {
  return (
    <div className='UserInfo'>
      <Avatar user={props.user} />
      <div className='UserInfo-name'>{props.user.name}</div>
    </div>
  )
}
// Comment
function Comment(props) {
  return (
    <div>
      <UserInfo user={props.author} />
      <div>{props.text}</div>
      <p>{formatDate(props.date)}</p>
    </div>
  )
}

function ComponentsProps() {
  return (
    <>
      <p className='text-2xl text-center'>Components and Props</p>
      <p className='text-1xl text-center'>
        Composing Components - Extracting Components
      </p>

      {/* Rendering a Component */}
      <div className='p-5'>
        <p className='text-2xl'>Composing Components</p>
        <Welcome name='Ahmed' />
        <Welcome name='Mohamed' />
      </div>

      <hr />

      {/* Composing Components */}
      <div className='p-5'>
        <p className='text-2xl'>Extracting Components</p>
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
      </div>
    </>
  )
}

export default ComponentsProps
