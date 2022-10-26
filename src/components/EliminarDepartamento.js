import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';
import { Navigate } from 'react-router-dom';

export default class EliminarDepartamento extends Component {


    state = {
        status:false
    }
    EliminarDepartamento= (e) => {
        e.preventDefault();
        var numero = this.props.id;
        var request = "/api/departamentos/" + numero;
        var url = Global.urlDepartamentos + request;

        //axios delete para borrar
        axios.delete(url).then(response =>{
            this.setState({
                status:true
            });
        });
    }

    

  render() {

    //Comprobamos el state
    if(this.state.status == true){
        return(<Navigate to="/"/>);
    }
    return (
        <div>

            <h1>Eliminar Departamento: 
            <span style={{color:"red"}}>
                   {this.props.id}
            </span>
            </h1>
            <form onSubmit={this.EliminarDepartamento}>

            <button className='btn btn-danger'>Eliminar departamento</button>


            </form>
        </div>
    )
  }
}
