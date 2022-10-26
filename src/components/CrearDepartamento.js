import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';
import { Navigate } from 'react-router-dom';



export default class CrearDepartamento extends Component {


  cajaNumeroRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();

  state = {
    mensaje:"",
    status:false
  }

  //Necesitamos el parametro e porque cogemos los datos del evento
  insertDepartamento = (e) => {
      e.preventDefault();
      var request = "/api/departamentos";
      var url = Global.urlDepartamentos + request;

      //Definimos y recogemos las vbariables
      var numero = parseInt(this.cajaNumeroRef.current.value);
      var nombre = (this.cajaNombreRef.current.value);
      var localidad = (this.cajaLocalidadRef.current.value);

      //React ya permite declarar objetos con las propiedades del api json
      var departamento = {
        numero:numero,
        nombre:nombre,
        localidad:localidad
      };
      //El metodo post en axios recibe dos metodos:
      //1º url y 2º el objeto json para la api
      axios.post(url, departamento).then(response=>{
        this.setState({
          mensaje:"Departamento insertado!!",
          status:true
        });
      });
  }

  render() {
    if(this.state.status == true){
      return (<Navigate to="/"/>)
    }
    return (
      <div>
        <h1>Crear Departamento</h1>
        <form style={{width:"600px" , margin:"0 auto"}}>
          <label>Numero:</label>
          <input type="text" className='form-control' ref={this.cajaNumeroRef} required/><br/>
          <label>Nombre:</label>
          <input type="text" className='form-control' ref={this.cajaNombreRef} required/><br/>
          <label>Localidad:</label>
          <input type="text" className='form-control' ref={this.cajaLocalidadRef} required/><br/>
          <button className='btn btn-primary' onClick={this.insertDepartamento} >
            Insertar Depatarmento
          </button>
        </form>
        <h3 style={{color:"blue"}}>
          {this.state.mensaje}
        </h3>
      </div>
    )
  }
}
