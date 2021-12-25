import React from "react";
import DisplayCard from "../Components/DisplayCard";
import Progress from "../Components/Progress";
import "./Train.css";
import { Link } from "react-router-dom";

class Train extends React.Component {
  state = { sessionCards: [], currentCard: 0, haveCards: false };

  componentDidMount() {
    this.loadFromSessionStorage();

    if (this.state.sessionCards.length === 0) {
      if (this.props.cards.length > 0) {
        //    If props have cards => write to sessionstorage => load to state
        this.updateSessionStorage(this.props.cards);
        this.loadFromSessionStorage();
      } else {
        // if both dont have, state will remain []
        // this.setState({ haveCards: false });
      }
    }
  }

  updateSessionStorage(data) {
    sessionStorage.setItem("sessioncards", JSON.stringify(data));
  }

  loadFromSessionStorage() {
    // Check if session storage has cards and load into state
    const data = sessionStorage.getItem("sessioncards");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        this.setState({ sessionCards: parsedData, haveCards: true });
        // TODO check if there's a risk of data being in storage but length = 0 ?
      } catch (err) {
        console.log(err);
        console.log("Invalid Data: " + data);
        localStorage.removeItem("sessioncards");
      }
    }
  }

  nextCard() {
    if (this.state.currentCard + 1 === this.state.sessionCards.length) {
      this.setState({ haveCards: false });
    } else {
      this.setState((prev) => {
        return { currentCard: prev.currentCard + 1 };
      });
    }
  }

  trainAgain() {
    // on new training session > get cards from prop =>
    //  to session storage => to state
  }

  renderCard() {
    if (this.state.haveCards) {
      return (
        <>
          <DisplayCard card={this.state.sessionCards[this.state.currentCard]} />
          <Progress
            length={this.state.sessionCards.length}
            current={this.state.currentCard + 1}
          />

          <button onClick={() => this.nextCard()}>Next </button>
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
