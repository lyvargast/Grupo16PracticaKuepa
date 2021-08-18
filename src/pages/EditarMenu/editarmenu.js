import './editarmenu.css';
import BotonAnadirProducto from '../../components/BotonAnadirProducto/botonanadirproducto';
import TablaProductos from '../../components/TablaProductos/tablaproductos';
import NavBar from '../../components/NavBar/navbar'

function Editarmenu() {
    return(
      <div className="container-fluid fondoeditar">
         <NavBar/>
         <div className="text-center  cajaeditarmenu">
            
             <div className="tituloedi" > 
                <h1 className="tituloedicion">EDITAR MENÚ</h1>
             </div>

                 
            </div>

            <div className="container">
             < BotonAnadirProducto />
               <TablaProductos />
            </div>
           
      </div>
      );
  }
  
  export default Editarmenu;