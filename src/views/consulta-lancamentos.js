import React from "react";
import {withRouter} from "react-router-dom"
import Card from "../components/card";
import FormGroup from "../components/form-group";

class ConsultaLancamentos extends React.Component{

    render(){
        return(
            <Card title="Consultar lançamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup label="Ano: *" htmlFor="inputAno">
                                <input 
                                    type="text"
                                    class="form-control"
                                    id="inputAno"
                                    placeholder="Digite o ano"    
                                />
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter (ConsultaLancamentos);