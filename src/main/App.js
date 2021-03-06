import "bootswatch/dist/flatly/bootstrap.css";
import React from "react";
import "toastr/build/toastr.css";
import "toastr/build/toastr.min.js";
import Navbar from "../components/navbar";
import "../custom.css";
import Rotas from "./rotas";

import "primereact/resources/themes/nova-light/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </>
    );
  }
}
export default App;
