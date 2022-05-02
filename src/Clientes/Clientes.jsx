import './Clientes.css'
import {Table,Button,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {useLocalStorage} from './useLocalStorage';
import  Nav from '../Nav/Nav.jsx';
  const datos1 = [
  { nombre: "Luis David", contacto :{
    email:"Luis12@gmail.com",
    telefono:"945263854",
  },
    empresa:"Servicios Damper",
  },
   { nombre: "Enrique Marcos", contacto :{
    email:"Enrique34@gamil.com",
    telefono:"912569854",
  },
    empresa:"Maquinaria Rafael",
  },
  
];


function Clientes({clickRegistro,setclickRegistro}){
  
const [datos,setDatos]=useLocalStorage('datos',{datos1})

  function Ver(elemento){
    cliente[0].form=elemento;
    cliente[0].ver=true;
    console.log(datos.datos1);
    setCliente({...cliente})
  
  }
  function CerrarVer(){
     cliente[0].ver=false;
    setCliente({...cliente})
  }
 
  

  function handleChangeEmpresa(e){

    cliente[0].form.empresa=e.target.value;
    setDatos(datos)
    setCliente({...cliente});
    
  }
  function handleRegistrarChangeEmpresa(e){

    
    datosregistro.form.empresa=e.target.value;
    setDatos(datos)
    Setdatosregistro({...datosregistro});
  }
    function handleChangeNombre(e){

    cliente[0].form.nombre=e.target.value;


   
    
    setCliente({...cliente});
  }
  function handleRegistrarChangeNombre(e){
    setDatos(datos);
    datosregistro.form.nombre=e.target.value;
   
    
   
  }
    function handleChangeEmail(e){

    cliente[0].form.contacto.email=e.target.value;
 
    setDatos(datos)

    setCliente({...cliente});
  }
  function handleRegistrarChangeEmail(e){

    datosregistro.form.contacto.email=e.target.value;
   
    Setdatosregistro({...datosregistro});
   
  }

    function handleChangeTelefono(e){

    cliente[0].form.contacto.telefono=e.target.value;
  
    setDatos(datos)
 
    setCliente({...cliente});
  }
  function handleRegistrarChangeTelefono(e){

    datosregistro.form.contacto.telefono=e.target.value;
  
    Setdatosregistro({...datosregistro});
  }
    function Editar(elemento){
      
      cliente[0].form=elemento;

      setCliente({...cliente});
      setEditar(true);
      
      
      console.log(datos)

  }
  function CancelarEditar(){

       setEditar(false);   
  }
    function GuardarRegistrar(){

      datos.datos1.push(datosregistro.form);
      datosregistro.form={
    nombre:'',
    contacto:{email:'',telefono:''},
    empresa:'',
    }
      setclickRegistro(false);
      setDatos({...datos});
        
  }
    function CancelarRegistrar(){

      setclickRegistro(false);
  }
    function GuardarEditar(){
          setDatos(datos)
         setEditar(false);   
  }
  function Eliminar(elemento){
    var contador =0;
    cliente[0].form=elemento;
    
    datos.datos1.map((registro)=>{
      console.log(registro.nombre)
      console.log(cliente[0].form.nombre)
    if(cliente[0].form.nombre==registro.nombre){
      datos.datos1.splice(contador,1)
    }
    contador++;
  });

setDatos(datos);
setCliente({...cliente})
  }





const [datosregistro,Setdatosregistro]=useState({form:{
    nombre:'',
    contacto:{email:'',telefono:''},
    empresa:'',
    },})
const [editar,setEditar] = useLocalStorage('editar',false);
const [cliente,setCliente] = useLocalStorage('cliente',[
  {
    datos:datos.datos1,
    form:{
    nombre:'',
    contacto:{email:'',telefono:''},
    empresa:'',
    },
    ver:false,
    
  }]
  );
  return (
    <div className="Clientes">
      <div className="Clientes_Title">
        <h3>Clientes</h3>
        <p>Administra tus Clientes</p>
      </div>
      <div className="Clientes_Table">
        <Table>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Contacto</th>
              <th scope="col">Empresa</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
          {datos.datos1.map((elemento)=>(
            <tr key={elemento.id} >
              <th>{elemento.nombre}</th>
              <td>Email: {elemento.contacto.email}<br/>Telefono: {elemento.contacto.telefono}</td>
              <td>{elemento.empresa}</td>
              <td>
                <tr className="Botones">
                  <td><button onClick={()=> Ver(elemento)}>Ver</button></td>
                  <td><button onClick={()=> Editar(elemento)}>Editar</button></td>
                  <td><button onClick={()=> Eliminar(elemento)}>Eliminar</button></td>
                </tr>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>  

      </div>
        <Modal isOpen={cliente[0].ver}>
        <ModalHeader>
          <div>
            <h3>Cliente: {cliente[0].form.nombre}</h3>
          </div>

        </ModalHeader>
          <ModalBody>
          <FormGroup className="LabelVer">
            <label className="LabelTitulo">Nombre:</label>
            <label>{cliente[0].form.nombre}</label>
            
          </FormGroup>
          <FormGroup className="LabelVer">
            <label className="LabelTitulo">Empresa:</label>
            <label>{cliente[0].form.empresa}</label>
            
          </FormGroup>
            <FormGroup className="LabelVer">
            <label className="LabelTitulo" >Email:</label>
            <label>{cliente[0].form.contacto.email}</label><br/><br/>
            <label className="LabelTitulo" >Telefono:</label>
            <label>{cliente[0].form.contacto.telefono}</label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={CerrarVer} >Cerrar</Button>
        </ModalFooter>  
        </Modal>


       <Modal isOpen={editar}>
        <ModalHeader>
          <div>
            <h3>Editar Cliente</h3>
          </div>
          <Button color="danger" onClick={CancelarEditar}>X</Button>

        </ModalHeader>
          <ModalBody>
          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="nombre" type="text" value={cliente[0].form.nombre} onChange={(e)=>handleChangeNombre(e)}/>
          </FormGroup>
          <FormGroup>
            <label>Empresa</label>
            <input className="form-control" name="empresa"  type="text" value={cliente[0].form.empresa} onChange={(e)=>handleChangeEmpresa(e)}/>
          </FormGroup>
            <FormGroup>
            <label>Email</label>
            <input className="form-control"   type="text" value={cliente[0].form.contacto.email} onChange={(e)=>handleChangeEmail(e)}/>
          </FormGroup>
            <FormGroup>
            <label>Telefono</label>
            <input className="form-control"  type="text" value={cliente[0].form.contacto.telefono} onChange={(e)=>handleChangeTelefono(e)} />
          </FormGroup>
           




        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={CancelarEditar}>Guardar</Button>
        </ModalFooter>  
      </Modal> 



             <Modal centered={true} isOpen={clickRegistro}>
        <ModalHeader>
          <div>
            <h3>Registrar Cliente</h3>
          </div>
          <Button color="danger" onClick={CancelarRegistrar}>X</Button>

        </ModalHeader>
          <ModalBody>
          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="nombre" type="text"  onChange={(e)=>handleRegistrarChangeNombre(e)}/>
          </FormGroup>
          <FormGroup>
            <label>Empresa</label>
            <input className="form-control" name="empresa"  type="text" onChange={(e)=>handleRegistrarChangeEmpresa(e)}/>
          </FormGroup>
            <FormGroup>
            <label>Email</label>
            <input className="form-control"   type="text"   onChange={(e)=>handleRegistrarChangeEmail(e)}/>
          </FormGroup>
            <FormGroup>
            <label>Telefono</label>
            <input className="form-control"  type="text" onChange={(e)=>handleRegistrarChangeTelefono(e)} />
          </FormGroup>
           




        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={GuardarRegistrar}>Guardar</Button>
        </ModalFooter>  
      </Modal> 


    </div>



    
  );
}

export default Clientes;