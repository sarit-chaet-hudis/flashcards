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
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <>
        <h1>Card List:</h1>
        <table className="cardsTable">
          <tbody>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
            {this.renderList()}
          </tbody>
        </table>
      </>
    );
  }
}

export default CardList;
