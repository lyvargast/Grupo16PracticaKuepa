import './editarmenu.css';
import NavProductos from '../../components/NavProductos/navproductos';
import ModalAnadirCategoria from '../../components/ModalAnadirCategoria/modalanadircategoria';
import BodyEditarMenu from '../../components/BodyEditarMenu/bodyeditarmenu';
function Editarmenu() {
    return(
      <div className="container-fluid fondoeditar">
         <div className="text-center  cajaeditarmenu">
            
             <div className="tituloedi" > 
                <h1 className="tituloedicion">EDITAR MENÚ</h1>
             </div>
                  <button type="button" className="btnanadircateg" data-bs-toggle="modal" data-bs-target="#ModalCategoria">
                      AÑADIR CATEGORÍA
                  </button>
            </div>

            <div className="container-fluid">
              <NavProductos />
            </div>

            <div className="container ladolado">
                <div className="col-sm-12 col-md-12 col-lg-8"><BodyEditarMenu /></div>
            </div>
           
            <ModalAnadirCategoria />
      </div>
      );
  }
  
  export default Editarmenu;