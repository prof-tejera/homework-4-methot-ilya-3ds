import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  width: 100%;
  height: 70px;
  text-align: right;
  margin-bottom: 10px;
  background-color: white;
  opacity: 80%;
  font-size: 48px;
  justify-content: flex-end;
  white-space: nowrap;
  overflow: hidden;
`;

class Screen extends Component {
  render() {
    return <Container>{this.props.value}</Container>;
  }
}

Screen.propTypes = {
  value: PropTypes.string
}

export default Screen;
