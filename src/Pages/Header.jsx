import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <br />
        <Link to="/train">Train</Link>
        <br />
        <Link to="/manage">Manage Cards</Link>
      </>
    );
  }
}

export default Header;
