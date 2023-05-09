import React from 'react'
import "./PopUp.css";

const PopUp = () => {
    let weather="Rainy";
    let suggestion="";
     const user={
        name:"Rainy",
        Display:"Have a glass of Wine"

     }
     if(user.name==weather){
        suggestion=user.Display;
     }
  return (
    <div className='pop-up'>
        <em>{suggestion}</em>
    </div>
  )
}

export default PopUp