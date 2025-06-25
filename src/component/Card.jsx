import React from 'react'

function Card(props) {
  return (
    <div>
       {props.children}
      <button onClick={props.handClick}>
        {props.text}

       
      </button>
      <button onClick={props.handleDec}>
      {props.text1}
      </button>


    </div>
  )
}

export default Card