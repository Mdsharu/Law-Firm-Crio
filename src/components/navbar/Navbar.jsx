import React from 'react'
import "./Navbar.css";
import Logo from "./Logo";
import NavContent from './NavContent';
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Logo />
        <NavContent />
        <Button children="Contact Now" />
    </nav>
  )
}

export default Navbar;
