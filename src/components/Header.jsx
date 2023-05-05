import React from 'react'
import {BsSearch} from "react-icons/bs"
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-2">
        <h1 className="navbar-brand text-light">
          SKYSCAN
        </h1>
        <div className="search">
          <input type="text" className='search-input text-light mx-2' placeholder='Search..' />
          <BsSearch className='text-light mx-2'/>
        </div>
      </nav>
    </div>
  )
}

export default Header