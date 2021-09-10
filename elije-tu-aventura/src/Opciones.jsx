import React from "react";

class Opciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button className="botones" onClick={this.props.handleClick} id="a">
            A
          </button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button className="botones" onClick={this.props.handleClick} id="b">
            B
          </button>
          <h2>{this.props.opcionB}</h2>
        </div>
      </div>
    );
  }
}

export default Opciones;
