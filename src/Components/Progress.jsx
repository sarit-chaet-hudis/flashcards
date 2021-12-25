import React from "react";
import "./Progress.css";

class Progress extends React.Component {
  renderProgress() {
    const width =
      Math.floor((this.props.current / this.props.length) * 100) + "%";
    return <div className="bar" style={{ width: width }}></div>;
  }

  render() {
    console.log(`{this.props.current} is ${this.props.current}`);
    return (
      <div className="Progress">
        {this.props.current} / {this.props.length}
        {this.renderProgress()}
      </div>
    );
  }
}

export default Progress;
