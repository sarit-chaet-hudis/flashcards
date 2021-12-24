import React from "react";
import DisplayCard from "../Components/DisplayCard";
import Progress from "../Components/Progress";
import "./Train.css";

class Train extends React.Component {
  state = { currentCard: 0, haveCards: false };

  componentDidMount() {
    if (this.props.cards.length > 0) {
      console.log("has cards");
      this.setState({ haveCards: true });
    } else {
      console.log("not have cards");
      this.setState({ haveCards: false });
    }
  }

  nextCard() {}
  renderCard() {
    if (this.state.haveCards) {
      return <DisplayCard card={this.props.cards[this.state.currentCard]} />;
    }
  }
  render() {
    return (
      <div className="Train">
        <h1>Train </h1>
        {this.renderCard()}
        <Progress />
      </div>
    );
  }
}

export default Train;
