import React from 'react'

function ListsAndKeys() {
  const numbers = [1, 2, 3, 4, 5]

  //   const listItems = numbers.map((number) => <li>{number}</li>)
  //   const doubled = numbers.map((number) => number * 2)
  //   console.log(doubled)

  function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number, index) => (
      <li key={index}>{number}</li>
    ))
    return <ul>{listItems}</ul>
  }

  // Keys Must Only Be Unique Among Siblings
  function Blog(props) {
    const sidebar = (
      <ul className='list-disc'>
        {props.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
    const content = props.posts.map((post) => (
      <div key={post.id}>
        <p>{post.title}</p>
        <p>{post.content}</p>
      </div>
    ))
    return (
      <>
        <p>'-)' Sidebar</p>
        {sidebar}
        <br />
        <p>'-)' Content</p>
        {content}
      </>
    )
  }

  const posts = [
    { id: 1, title: 'Title 1', content: 'Content 1' },
    {
      id: 2,
      title: 'Title 2',
      content: 'Content 2',
    },
  ]

  // Embedding map() in JSX
  function ListItem(props) {
    return <li>{props.value}</li>
  }

  function NumberList2(props) {
    const numbers = props.numbers
    return (
      <ul>
        {numbers.map((number) => (
          <ListItem key={number.toString()} value={number} />
        ))}
      </ul>
    )
  }

  return (
    <div className='container mx-auto px-4 m-3'>
      <p className='text-2xl text-center'>Lists and Keys</p>
      {/* <ul>{listItems}</ul> */}
      <p>Rendering Multiple Components And Extracting with Keys</p>
      <NumberList numbers={numbers} />
      <hr />
      <br />
      <p>Keys Must Only Be Unique Among Siblings</p>
      <Blog posts={posts} />
      <hr />
      <br />
      <p>Embedding map() in JSX</p>
      <NumberList2 numbers={numbers} />
    </div>
  )
}

export default ListsAndKeys
