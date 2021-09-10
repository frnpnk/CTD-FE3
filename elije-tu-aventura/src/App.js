import React from "react";
import Relato from "./Relato";
import Opciones from "./Opciones.jsx";
import Historial from "./Historial";
import data from "./components/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1,
      camino: "",
      historial: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    let id = e.target.id;
    if (this.state.etapa < 5) {
      if (id === "a") {
        this.setState({
          etapa: this.state.etapa + 1,
          camino: id
        });
        this.state.historial.push("A");
      }
      if (id === "b") {
        this.setState({
          etapa: this.state.etapa + 1,
          camino: id
        });
        this.state.historial.push("B");
      }
    } else {
      alert("Fin");
    }
  };

  render() {
    return (
      <div className="App">
        {data
          .filter(
            (element) => element.id === this.state.etapa + this.state.camino
          )
          .map((element) => (
            <div className="layout">
              <Relato relato={element.historia} />
              <Opciones
                opcionA={element.opciones.a}
                opcionB={element.opciones.b}
                handleClick={this.handleClick}
              />
              <Historial
                camino={this.state.camino}
                historial={this.state.historial
                  .slice(0, this.state.historial.length - 1)
                  .map((e) => (
                    <li>{e}</li>
                  ))}
              />
            </div>
          ))}
      </div>
    );
  }
}
export default App;
