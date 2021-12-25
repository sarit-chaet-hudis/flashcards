import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Train from "./Train";
import Manage from "./Manage";

class Main extends React.Component {
  state = {
    cards: [],
  };

  updateCard(updatedCard) {
    // updatedCard is an object conatining original id
  }

  addCard = (e, question, answer) => {
    // newCard is a card object,
    // will be given a new id here and added to cards
    e.preventDefault();
    const id = Date.now();
    const newCard = {
      id: id,
      question: question,
      answer: answer,
    };
    const updatedCards = [...this.state.cards, newCard];
    this.updateLocalStorage(updatedCards);
    this.loadFromLocalStorage();
  };

  loadFromLocalStorage() {
    // Check if local storage has cards and load into state
    const data = localStorage.getItem("cards");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        this.setState({ cards: parsedData });
      } catch (err) {
        console.log(err);
        console.log("Invalid Data: " + data);
        localStorage.removeItem("cards");
      }
    }
  }

  updateLocalStorage(data) {
    localStorage.setItem("cards", JSON.stringify(data));
  }

  componentDidMount() {
    this.loadFromLocalStorage();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Route path="/" component={Header} />
            <Route path="/" exact component={Home} />
            <Route path="/train">
              <Train cards={this.state.cards} />
            </Route>
            <Route path="/manage">
              <Manage cards={this.state.cards} addCard={this.addCard} />
            </Route>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default Main;
