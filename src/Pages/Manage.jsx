import React from "react";
import CardList from "../Components/CardList";

class Manage extends React.Component {
  render() {
    return (
      <>
        <CardList cards={this.props.cards} />
      </>
    );
  }
}

export default Manage;
