import React from "react";

class Relato extends React.Component {
  render() {
    return <h1 className="historia">{this.props.relato}</h1>;
  }
}

export default Relato;
