import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to FlashCards!</h1>
        <div>Flash Cards are a great way to help you memorize things.</div>
        <br />
        <div>You can add or delete cards here:</div>
        <Link to="/manage">Manage Cards</Link>
        <br />
        <div>Or Train here:</div>
        <Link to="/train">Train</Link>
        <br />
        <hr />
        <div>Built by sarit chaet hudis, based on react.</div>
      </div>
    );
  }
}

export default Home;
