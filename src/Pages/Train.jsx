import React from "react";
import DisplayCard from "../Components/DisplayCard";
import Progress from "../Components/Progress";
import "./Train.css";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";

class Train extends React.Component {
  state = { currentCard: 0, haveCards: false };

  componentDidMount() {
    if (this.props.cards.length > 0) {
      console.log("have cards");
      this.setState({ haveCards: true });
    } else {
      this.setState({ haveCards: false });
    }
  }

  nextCard() {
    if (this.state.currentCard + 1 === this.state.cards.length) {
      this.setState({ haveCards: false });
    } else {
      this.setState((prev) => {
        return { currentCard: prev.currentCard + 1 };
      });
    }
  }

  renderCard() {
    if (this.state.haveCards) {
      return (
        <>
          <DisplayCard card={this.props.cards[this.state.currentCard]} />
          <Progress />
          {/* <Button onClick={this.nextCard} buttonText="Next" /> */}
          <button onClick={this.nextCard}>Next</button>
        </>
      );
    } else {
      return (
        <div>
          <h2>No Cards to show.</h2>
          <div>
            You can add cards on the <Link to="/manage">Manage Cards</Link>{" "}
            page.
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="Train">
        <h1>Train </h1>
        {this.renderCard()}
      </div>
    );
  }
}

export default Train;
