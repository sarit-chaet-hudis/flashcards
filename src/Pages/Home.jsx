import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to FlashCards!</h1>
        <div>You can add cards here:</div>
        <Link to="/manage">Manage Cards</Link>
        <br />
        <div>Or Train here:</div>
        <Link to="/train">Train</Link>
        <br />
      </div>
    );
  }
}

export default Home;
