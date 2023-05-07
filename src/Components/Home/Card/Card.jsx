import React from 'react'

const Card = (props) => {
  return (
    <img className='card' src={props.src} alt="cover" />
  )
}

export default Card