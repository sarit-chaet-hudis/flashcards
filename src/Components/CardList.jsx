import React from "react";
import "./CardList.css";

class CardList extends React.Component {
  renderList() {
    const { cards } = this.props;
    if (cards.length > 0) {
      return cards.map((card) => {
        return (
          <tr key={card.id} className="cardInList">
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>
              <i
                className="fas fa-edit"
                style={{ color: "dodgerblue" }}
                onClick={() => this.props.updateForm(card.id)}
              ></i>
            </td>
            <td>
              <i
                className="fas fa-trash-alt"
                style={{ color: "red" }}
                onClick={() => this.props.deleteCard(card.id)}
              ></i>
            </td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Card List</h2>
        <table className="cardsTable">
          <tbody>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CardList;
