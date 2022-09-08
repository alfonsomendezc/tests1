import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">TITLE</span>
        </Link>
        <div className="ml-auto">
          <Link to="/page1">
            <Button variant="contained" className="me-3">Join Now!</Button>
          </Link>
		  <Link to="/page2">
            <Button variant="contained" className="me-3">Button 1</Button>
          </Link>
		  <Link to="/page3">
            <Button variant="contained" className="me-3">Button 2</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
