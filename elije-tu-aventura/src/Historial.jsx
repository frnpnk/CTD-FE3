import React from "react";

class historial extends React.Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Seleccion Anterior: {this.props.camino.toUpperCase()}</h3>
        <h4> Historial de opciones elegidas:</h4>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default historial;
