import React, { Component } from 'react'
import axios from 'axios';
import Global from './../Global';
import { Navigate } from 'react-router-dom';

export default class UpdateDepartamentos extends Component {

    //Cojemos las cajas y las referenciamos
    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef= React.createRef();


    //Creamos el state
    state = {
        //Lo creamos como objeto
        departamento: {},
        status:false
    }

    //Funcion para buscar departamentos atreves de su id
    buscarDepartamentos = () => {
        var id = this.props.id;
        var request = "/api/departamentos/" + id;
        var url = Global.urlDepartamentos + request;
        axios.get(url).then(response =>{
            this.setState({
                departamento: response.data
            });
        });
    }
    //Funcion para modificar
    UpdateDepartamento = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumeroRef.current.value);
        var nom = (this.cajaNombreRef.current.value);
        var loc = (this.cajaLocalidadRef.current.value);
        //Creamos el objeto departamentos
        //Y metemos los datos recogidos
        var data = {
            numero:num,
            nombre:nom,
            localidad: loc
        };
        //Definimos la peticion y la url
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        console.log(data);
        console.log(url);
        //Hacemos el put con el axios
        axios.put(url,data).then(response =>{
            this.setState({
                status:true
            });
        });
    }
    //Para que salga nada mas cargar
    componentDidMount = () => {
        this.buscarDepartamentos();
    }

  render() {
    return (
      <div>
        <h1>Update Departamentos</h1>
        <form>
            {
                this.state.status == true &&
               (<Navigate to="/"></Navigate>)
            }
            <input type="hidden" ref={this.cajaNumeroRef} defaultValue={this.state.departamento.numero}/><br/>
            <label>Nombre: </label>
            <input type="text" ref={this.cajaNombreRef} defaultValue ={this.state.departamento.nombre}/><br/>
            <label>Localidad: </label>
            <input type="text" ref={this.cajaLocalidadRef} defaultValue ={this.state.departamento.localidad}/><br/>

            <button className='btn btn-success' onClick={this.UpdateDepartamento}>Modificar</button>
        </form>
      </div>
    )
  }
}
