import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">Home</Link>
        <br />
        <Link to="/train">Train</Link>
        <br />
        <Link to="/manage">Manage Cards</Link>
      </div>
    );
  }
}

export default Header;
