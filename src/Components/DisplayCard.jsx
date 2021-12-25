import React from "react";
import "./DisplayCard.css";

class DisplayCard extends React.Component {
  render() {
    return (
      <div className="flip-card DisplayCard">
        <div className="flip-card-inner">
          <div className="flip-card-front center">
            {this.props.card.question}
          </div>
          <div className="flip-card-back center">{this.props.card.answer}</div>
        </div>
      </div>
    );
  }
}

export default DisplayCard;
