import React, { Component } from "react";
import "./Main.css";

export default class Main extends Component {
  /*
  Criar estados
  constructor() {
    Chamar o constructor da classe que herda
    super(props);

     Tudo que muda aqui, reflete no render
    this.state = {
      novaTarefa: "",
    };

    this.inputMudou = this.inputMudou.bind(this);

    Outra forma é fazer sem constructor e sem bind utilizando
    Class fields
    */

  state = {
    novaTarefa: "",
  };

  /*
  Notação com this quando temos constructor
  inputMudou(e) {
    this.setState({
      novaTarefa: e.target.value,
    });
  }
  */

  handleChange = (e) => {
    setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text"></input>
          <input type="submit">Enviar</input>
        </form>
      </div>
    );
  }
}
