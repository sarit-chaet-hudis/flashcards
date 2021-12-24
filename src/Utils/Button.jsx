export default function Button() {
  return <button onClick={this.props.onClick}>{this.props.buttonText}</button>;
}
