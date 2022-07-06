import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import boy from "./assets/boy.jpeg";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patsOnBillysHead: 0,
    };
  }
  patBillysHead = () => {
    if (this.state.patsOnBillysHead < 50) {
      this.setState({
        patsOnBillysHead: this.state.patsOnBillysHead + 1,
      });
    }
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
        <Container>
          <Row>
            <Col>
              <Button variant="success">Success</Button>
            </Col>
            <Col>
              <span>😋👋 {this.state.patsOnBillysHead}</span>
            </Col>
            <Col>
              <ProgressBar
                now={this.state.patsOnBillysHead * 2}
                label={`${this.state.patsOnBillysHead * 2}%`}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
