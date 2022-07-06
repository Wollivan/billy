import { Component } from "react";
import boy from "./assets/boy.jpeg";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patsOnBillysHead: 0,
    };
  }
  patBillysHead = () => {
    this.setState({
      patsOnBillysHead: this.state.patsOnBillysHead + 1,
    });
    console.log("Patting billys head");
  };

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img
          src={boy}
          onClick={this.patBillysHead}
          alt={this.props.name}
          title={this.props.name}
          width={300}
        />
        <span>😋👋 {this.state.patsOnBillysHead}</span>
      </div>
    );
  }
}
