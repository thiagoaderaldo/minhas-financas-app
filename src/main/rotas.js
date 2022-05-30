import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CadastroUsuario from "../views/cadastroUsuario";
import Login from "../views/login";

function Rotas() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro-usuarios" component={CadastroUsuario} />
      </Switch>
    </HashRouter>
  );
}

export default Rotas
