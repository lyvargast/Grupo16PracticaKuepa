import BodyHistorialPedidos from '../../components/BodyHistorialPedidos/bodyhistorialpedidos';
import './historialpedidos.css'
import logo from './LogoLenosHeader.png'

function HistorialPedidos() {
    return(
      
      <div className="container-fluid fondohistorialpedidos">
        <div className="text-center">
              <h1>HISTORIAL PEDIDOS</h1>
        </div>
           <BodyHistorialPedidos />
           <BodyHistorialPedidos />
           <div className="text-center imagenlogo">
             <img src={logo} />
           </div>
     </div>
     );
 }
 
 export default HistorialPedidos;
           