import { NavLink } from "react-router-dom";
import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink to='/' className="title">Quiz Hub</NavLink>
      <hr  className="divider"/>
    </div>
  )
}

export default Header;