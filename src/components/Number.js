import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Styles = {
  Container: {
    padding: "20px",
    borderRadius: "10px",
    width: "auto",
    flex: "1 0 30%",
    fontSize: "24px",
    cursor: 'pointer'
  },
};

class Number extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
  }

  render() {

    const { hovered } = this.props;

    return (
      <button
        style={{...Styles.Container, backgroundColor: this.state.hovered ? 'grey' : 'white'}}
        onMouseEnter={() => {
          this.setState({ hovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false });
        }}
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.value}
      </button>
    );
  }
}

Number.propTypes = {
  value: PropTypes.number
}

export default Number;
