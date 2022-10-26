import React, { Component } from 'react';


export default class DetallesDepartamento extends Component {
  render() {
    return (
      <div>
        <h1>Detalles Departamento</h1>
        <h3 style={{color:"blue"}}>
            Id: {this.props.iddepartamento}
        </h3>
        <h3 style={{color:"blue"}}>
            Nombre: {this.props.nombre}
        </h3>
        <h3 style={{color:"green"}}>
            Localidad: {this.props.localidad}
        </h3>
      </div>
    )
  }
}
