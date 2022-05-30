import React from "react";

import Card from "../components/card";
import FormGroup from "../components/form-group";

class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  cadastrar = () => {
    console.log(this.state);
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
              <button type="button" className="btn btn-danger">
                <i className="pi pi-times"></i> Cancelar
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default CadastroUsuario;
