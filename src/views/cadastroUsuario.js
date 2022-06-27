import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import UsuarioService from "../app/service/usuarioService";
import { mensagemSucesso, mensagemErro } from "../components/toastr";

class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  constructor() {
    super();
    this.service = new UsuarioService();
  }

  cadastrar = () => {
    const msgs = this.validar();

    if(msgs && msgs.length > 0){
      msgs.forEach((msg, index) =>{
        mensagemErro(msg);
      })
      return false;
    }

    const usuario = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
    };
    this.service
      .salvar(usuario)
      .then((response) => {
        mensagemSucesso(
          "Usuario cadastrado com sucesso! Faça login para acessar o sistema."
        );
        this.props.history.push("/login");
      })
      .catch((erro) => {
        mensagemErro(erro.response.data);
      });
  };

  validar() {
    const msgs = [];

    if (!this.state.nome) {
      msgs.push("O campo Nome é obrigatório.");
    }

    if (!this.state.email) {
      msgs.push("O campo Email é obrigatório.");
    } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      msgs.push("Insira um email válido");
    }

    if (!this.state.senha || !this.state.senhaRepeticao) {
      msgs.push("Digite a senha e a confirmação da senha.");
    } else if (this.state.senha !== this.state.senhaRepeticao) {
      msgs.push("As campos Senha e Confirmar senha não conferem.");
    }

    return msgs;
  }

  cancelar = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <Card title="Cadastro de Usuário">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <FormGroup label="Nome: *" htmlFor="inputNome">
                <input
                  type="text"
                  id="inputNome"
                  name="nome"
                  className="form-control"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                />
              </FormGroup>
              <FormGroup label="Email: *" htmlFor="inputEmail">
                <input
                  type="text"
                  id="inputEmail"
                  name="email"
                  className="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </FormGroup>
              <FormGroup label="Senha: *" htmlFor="inputSenha">
                <input
                  type="password"
                  id="inputSenha"
                  name="senha"
                  className="form-control"
                  onChange={(e) => this.setState({ senha: e.target.value })}
                />
              </FormGroup>
              <FormGroup
                label="Confirmar senha: *"
                htmlFor="inputSenhaRepeticao"
              >
                <input
                  type="password"
                  id="inputSenhaRepeticao"
                  name="senhaRepeticao"
                  className="form-control"
                  onChange={(e) =>
                    this.setState({ senhaRepeticao: e.target.value })
                  }
                />
              </FormGroup>
              <button
                onClick={this.cadastrar}
                type="button"
                className="btn btn-success"
              >
                <i className="pi pi-save"></i> Salvar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.cancelar}
              >
                <i className="pi pi-times"></i> Cancelar
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default withRouter(CadastroUsuario);
