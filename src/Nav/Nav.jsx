import './Nav.css'
import {useLocalStorage} from '../Clientes/useLocalStorage';

function Nav({clickRegistro,setclickRegistro}) {


  function BotonRegistro(){
      setclickRegistro(true);

  }
  
  return (
    <div className="Nav">
      <div className="Nav_Title">
        <h3>CMR - Clientes</h3>
      </div>
      <div className="Nav_Links">
        <a href="">Clientes</a><br/><br/>

        <a href="" onClick={BotonRegistro} >Registrar Nuevo Cliente</a>
      </div>
 
    </div>
  );
}

export default Nav;