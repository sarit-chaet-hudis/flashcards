import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Train from "./Train";
import Manage from "./Manage";

class Main extends React.Component {
  state = {
    cards: [
      { id: "0", question: "Why is you geh", answer: "born this way" },
      { id: "1", question: "Is you father all..", answer: "Naked." },
      { id: "2", question: "Why is 6 afraid of 7", answer: "because 7 8 9" },
    ],
  };

  updateCard(updatedCard) {
    // updatedCard is an object conatining original id
  }

  getNewCardId() {
    // returns new Id for new card
  }

  createCard(newCard) {
    // newCard is a card object,
    // will be given a new id here and added to cards
  }

  loadFromLocalStorage() {
    // Check if local storage exists? and load
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
              <Manage cards={this.state.cards} />
            </Route>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default Main;
