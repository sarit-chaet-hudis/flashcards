import React from "react";
import DisplayCard from "../Components/DisplayCard";
import Progress from "../Components/Progress";
import "./Train.css";
import { Link } from "react-router-dom";

class Train extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionCards: [],
      currentCard: 0,
      haveCards: false,
      toggleFlip: false,
    };
  }

  async componentDidMount() {
    // load cards
    await this.loadFromSessionStorage();

    if (this.state.sessionCards.length === 0) {
      // didn't find sessioncards in state, reset currentCardIndex
      this.updateCurrentCardIndex(0);
      this.loadCurrentCardIndex();

      if (this.props.cards.length > 0) {
        //    If props have cards => write to sessionstorage => load to state
        this.updateSessionStorage(this.props.cards);
        this.loadFromSessionStorage();
      }
      // If both don't have cards, cards session will remain []
    }

    // Load current card index if exists on session storage, else remains 0
    this.loadCurrentCardIndex();
  }

  loadCurrentCardIndex() {
    // Gets current card index from session storage and updates it in state
    const cur = sessionStorage.getItem("currentCard");
    if (cur) {
      try {
        const parsedCurrent = JSON.parse(cur);
        this.setState({ currentCard: parsedCurrent });
      } catch (err) {
        console.log(err);
        console.log("Invalid Data: " + cur);
        localStorage.removeItem("currentCard");
      }
    } else {
      this.updateCurrentCardIndex(this.state.currentCard);
    }
  }

  updateCurrentCardIndex(cur) {
    // saves cur index as session storage current card index
    sessionStorage.setItem("currentCard", JSON.stringify(cur));
  }

  updateSessionStorage(data) {
    // saves card data (param) into session storage cards
    sessionStorage.setItem("sessioncards", JSON.stringify(data));
  }

  async loadFromSessionStorage() {
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
    // Advances the current card index by 1 (in session storage, then in state)
    // Resets flip to be front-showing.
    // If reaches the end, changes state of "haveCards" to false
    if (this.state.currentCard + 1 === this.state.sessionCards.length) {
      this.setState({ haveCards: false });
    } else {
      if (this.state.toggleFlip) {
        // immediately flip to hide answer,
        // move to next card only after flip animation ends.

        this.setState({ toggleFlip: false }, () =>
          setTimeout(() => {
            this.updateCurrentCardIndex(this.state.currentCard + 1);
            this.loadCurrentCardIndex();
          }, 500)
        );
      } else {
        // card is showing its front, immedieately move to next card
        this.updateCurrentCardIndex(this.state.currentCard + 1);
        this.loadCurrentCardIndex();
      }
    }
  }

  toggleFlip() {
    const current = this.state.toggleFlip;
    this.setState({ toggleFlip: !current });
  }

  repeatCard = () => {
    // Create copy of current card and add it to the end of session cards, to practice it again
    const curCard = this.state.sessionCards[this.state.currentCard];
    const tempCards = [...this.state.sessionCards, curCard];
    this.updateSessionStorage(tempCards);
    this.loadFromSessionStorage();
    this.nextCard();
  };

  trainAgain = () => {
    this.updateSessionStorage(this.shuffleCards(this.props.cards));
    this.loadFromSessionStorage();
    this.updateCurrentCardIndex(0);
    this.loadCurrentCardIndex();
    this.setState({ haveCards: true, toggleFlip: false });
  };

  shuffleCards = (array) => {
    let m = array.length - 1;
    let temp, i;
    while (m) {
      //there are still elements to suffle
      i = Math.floor(Math.random() * m);
      // gets remaining element and swaps it with current element
      temp = array[m];
      array[m] = array[i];
      array[i] = temp;
      m--;
    }
    return array;
  };

  renderCard() {
    if (this.state.haveCards) {
      return (
        <>
          <DisplayCard
            card={this.state.sessionCards[this.state.currentCard]}
            toggleFlip={this.state.toggleFlip}
          />
          <Progress
            length={this.state.sessionCards.length}
            current={this.state.currentCard + 1}
          />

          <button onClick={() => this.toggleFlip()}>Show Answer</button>
          <br />
          <div className={!this.state.toggleFlip ? "hide" : undefined}>
            <h3>Did you get it right?</h3>
            <button onClick={() => this.nextCard()}>Yes</button>
            <button onClick={() => this.repeatCard()}>No</button>
          </div>
        </>
      );
    } else {
      return (
        <div>
          <h2>No Cards to show.</h2>
          <button onClick={this.trainAgain}>Train Again</button>
          <br />
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
