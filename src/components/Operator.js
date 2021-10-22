import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Container = styled.div`
  border-width: 20px;
  border-color: black;
  padding: 20px;
  border-radius: 5px;
  margin: 5px;
  width: 50px;
  background-color: ${props => (props.hovered ? 'grey' : 'white')};
  text-align: center;
  font-size: 24px;
  cursor: pointer;
`;

class Operator extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
  }
  render() {
    return (
      <Container 
      hovered= {this.state.hovered}
      onMouseEnter={() => {
        this.setState({ hovered: true });
      }}
      onMouseLeave={() => {
        this.setState({ hovered: false });
      }}
      onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

Operator.propTypes = {
  value: PropTypes.string.isRequired
}

export default Operator;
