import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childName: "Billy",
    };
  }

  render() {
    return (
      <div>
        <Child name={this.state.childName} />
        <p>This is {this.state.childName}</p>
      </div>
    );
  }
}
