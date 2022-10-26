import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';
import loading from './../assets/images/load.gif';
import { NavLink } from 'react-router-dom';

export default class Departamentos extends Component {

    //Definimos el state
    state = {
        departamento: [],
        status:false
    }


    loadDepartamentos = () => {
        //Queremos hacer la peticion de Get
        var request = "/api/departamentos";
        //Recuperamos la url
        var url = Global.urlDepartamentos + request;
        //Hacemos el get con axios
        axios.get(url).then(response =>{
            console.log(url);
            this.setState({
                departamentos: response.data,
                status:true
            });
        });
    }


    componentDidMount = () =>{
        this.loadDepartamentos();
    }



  render() {
    //Esto es javascript
    if(this.state.status == false){
         //Loading
         return(<div>
            <img src={loading} style={{width:"600px"}} alt="imagen de carga"></img>
         </div>)
            
    }else{
        return(<div>
            <h1>Departamentos</h1>
            <table className='table table-bordered table-info'>
            <thead>

                <tr>
                    <th>Numero</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th>Detalles</th>
                    <th>Eliminar</th>
                    <th>Modificar</th>
                </tr>

            </thead>

            <tbody>
                {
                    this.state.departamentos.map((departamento,index)=>{
                        return(
                            <tr key={index}>
                                <td>{departamento.numero}</td>
                                <td>{departamento.nombre}</td>
                                <td>{departamento.localidad}</td>
                                <td>
                                    <NavLink className="btn btn-info" to={"/detalles/" + departamento.numero + "/" + departamento.nombre + "/" + departamento.localidad}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>

                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink className="btn btn-danger" to={"/eliminar/" + departamento.numero}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg>

                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink className="btn btn-primary" to={"/modificar/" + departamento.numero}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                                    </NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

            </table>
        </div>)
    }

  }
}
