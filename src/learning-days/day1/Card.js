import React from 'react'

const Card = (props) => {
  return (
    <>
      <h1>Hello everyone</h1>
      <h2>This is {props.One}</h2>
      <h2>This is {props.Two}</h2>
      <h2>This is {props.Three}</h2>
    </>
  )
}

export default Card
