import React from "react";
import CardList from "../Components/CardList";
import "./Manage.css";

class Manage extends React.Component {
  state = {
    question: "",
    answer: "",
    selectedCardId: undefined,
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateForm(id) {
    // show form with card id's content
    // after click, update card on Main
  }

  render() {
    return (
      <>
        <h1>Edit, Add or Delete Cards</h1>
        <div className="Manage">
          <CardList
            cards={this.props.cards}
            deleteCard={this.props.deleteCard}
          />
          <div className="newCardForm">
            <form>
              <h2>Add new Card</h2>
              <label htmlFor="question">Question: </label>
              <br />
              <input
                onChange={(e) => this.handleInputChange(e)}
                type="text"
                maxLength="30"
                name="question"
                id="question"
                value={this.state.question}
              ></input>
              <br />
              <label htmlFor="answer">Answer: </label>
              <br />
              <input
                onChange={(e) => this.handleInputChange(e)}
                type="text"
                maxLength="30"
                name="answer"
                id="answer"
                value={this.state.answer}
              ></input>
              <br />
              <button
                type="Submit"
                onClick={(e) => {
                  this.props.addCard(e, this.state.question, this.state.answer);
                  this.setState({ question: "", answer: "" });
                }}
              >
                Add Card
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Manage;
