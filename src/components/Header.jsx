import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Header.css";
const Header = ({getSearchLocationData}) => {
  
  const location=useRef(null);
  

  const submit = (e) => {
    e.preventDefault();
    getSearchLocationData(location.current.value)
    location.current.value=""
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-2">
        <h1 className="logo navbar-brand text-light">SKYSCAN</h1>
        <form className="search" onSubmit={submit}>
          <input
            type="text"
            ref={location}
            className="search-input text-light mx-2"
            placeholder="Search.."
          />
          <BsSearch onClick={submit} className=" text-light mx-2" />
        </form>
      </nav>
    </div>
  );
};
export default Header;
