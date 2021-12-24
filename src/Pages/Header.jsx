import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          {" "}
          <Link to="/train">Train</Link>
        </div>

        <div>
          {" "}
          <Link to="/manage">Manage Cards</Link>
        </div>
      </div>
    );
  }
}

export default Header;
