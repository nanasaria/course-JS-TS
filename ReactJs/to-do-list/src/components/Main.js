import React, { Component } from "react";
import Form from "./Form";
import Tarefas from "./Tarefas";
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
    tarefas: [],
    index: -1,
  };

  /*
  Notação com this quando temos constructor
  inputMudou(e) {
    this.setState({
      novaTarefa: e.target.value,
    });
  }
  */

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault;
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
      novaTarefa: "",
    });
  };

  handleChange = (e) => {
    setState({
      novaTarefa: e.target.value,
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
