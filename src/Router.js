import React, { Component } from 'react';
import {Route, BrowserRouter, Routes, useParams} from 'react-router-dom';
import Departamentos from './components/Departamentos';
import CrearDepartamento from './components/CrearDepartamento';
import MenuDepartamentos from './components/MenuDepartamentos';
import DetallesDepartamento from './components/DetallesDepartamento';
import EliminarDepartamento from './components/EliminarDepartamento';
import UpdateDepartamentos from './components/UpdateDepartamentos';


export default class Router extends Component {
  render() {

    function DetallesDepartamentosElement() {
      var {num, nom, loc} = useParams();
      return(
        //Las props las definimos aqui y pasamos los nombres a detalles departamento a los h1
        <DetallesDepartamento iddepartamento={num} nombre={nom} localidad={loc}/>
      )
    }

    function EliminarDepartamentoElement() {    
      var {id} = useParams();
      return(<EliminarDepartamento id={id}/>);
    }

    function UpdateDepartamentosElement() {
        var{iddepartamento}=useParams();
        return(<UpdateDepartamentos id={iddepartamento}/>)
    }

    return (
      
        <BrowserRouter>
        

            <MenuDepartamentos/>

            <Routes>

                <Route path="/" element={<Departamentos/>}/>
                <Route path="/crear" element={<CrearDepartamento/>}/>
                <Route path="/detalles/:num/:nom/:loc" element={<DetallesDepartamentosElement/>}/>
                <Route path="/eliminar/:id" element={<EliminarDepartamentoElement/>}/>
                <Route path="/modificar/:iddepartamento" element={<UpdateDepartamentosElement/>}/>

            </Routes>
        
        
        </BrowserRouter>



    )
  }
}
