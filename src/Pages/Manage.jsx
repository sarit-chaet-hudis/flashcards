import React from "react";
import CardList from "../Components/CardList";
import "./Manage.css";

class Manage extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Manage">
        <CardList cards={this.props.cards} />
        <div className="newCardForm">
          <form>
            <input
              onChange={(e) => this.handleInputChange(e)}
              label="Question:"
              type="text"
              maxLength="30"
              name="question"
              value={this.state.question}
            ></input>
            <input
              onChange={(e) => this.handleInputChange(e)}
              label="Answer:"
              type="text"
              maxLength="30"
              name="answer"
              value={this.state.answer}
            ></input>
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
    );
  }
}

export default Manage;
