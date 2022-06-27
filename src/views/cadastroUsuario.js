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
