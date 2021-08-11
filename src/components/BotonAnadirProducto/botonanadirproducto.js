import ModalAnadirProducto from '../ModalAnadirProducto/modalanadirproducto'
import './botonanadirproducto.css'
function BotonAnadirProducto(){
    return(
     <div>
            <div className="text-center"> 
                <button className="btnanadirprodu" data-bs-toggle="modal" data-bs-target="#ModalAnadirProducto">AÑADIR PRODUCTO</button>
            </div>
          <ModalAnadirProducto />
      </div>
      );
  }
  
  export default BotonAnadirProducto;