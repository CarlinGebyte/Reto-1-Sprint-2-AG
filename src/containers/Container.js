import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "../components/Card";
import Header from "../components/Header";

export default class Container extends Component {
  render() {
    return (
      <div>
        <Header />  
          <Row>
            <Col> 
              <Card />
            </Col>
          </Row>
       
      </div>
    );
  }
}
