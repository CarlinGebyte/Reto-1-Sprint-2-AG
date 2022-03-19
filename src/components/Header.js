import React, { Component } from "react";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    const Header = styled.div`
      background-color: hsl(180, 29%, 50%);
      background-image: url(https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-2-AG/499ba5fae3f7afbcd3c23182d0c0ee6450b4c562/src/img/bg-header-desktop.svg);
      height: 25.2vh;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
    `;
    return (
      <Header/>
    );
  }
}
