import React from 'react'
import "./PopUp.css";

const PopUp = ({message}) => {
    let weather="Rainy";
  return (
    <div className='pop-up'>
        <em>{message}</em>
    </div>
  )
}

export default PopUp