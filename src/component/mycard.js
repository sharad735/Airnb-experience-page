import React from 'react';
import './mycard.css'

function Mycard(props) {
  return (
    <div className='mycard'>mycard No {props.cardno}</div>
  )
}

export default Mycard