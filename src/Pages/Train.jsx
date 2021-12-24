import React from "react";
import DisplayCard from "../Components/DisplayCard";
import Progress from "../Components/Progress";

class Train extends React.Component {
  state = { currentCard: 0 };

  render() {
    return (
      <>
        <h1>TRAIN </h1>
        <DisplayCard card={this.props.cards[this.state.currentCard]} />
        <Progress />
      </>
    );
  }
}

export default Train;
