import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Card from "../components/Card";
import Header from "../components/Header";

export default class Container extends Component {
  render() {
    const DivContent = styled.main`
      padding: 3% 7%;
    `;
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
