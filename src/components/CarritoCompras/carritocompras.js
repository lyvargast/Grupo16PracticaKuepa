import './carritocompras.css'
import logo from './LogoLenosHeader.png'
import bbq from './bbq.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function CarritoCompras(){
	return (
		<div className="container overflow-hidden fondohistorialpedidos">
             <div className="row align-items-center primercuadro">
                 <div className="text-center d-flex justify-content-center py-2 col-8 col-md-9 col-lg-10">
                        <h4>NUEVA ORDEN</h4>                     
                        <img src={bbq}/>
                </div>
                 <div className="text-center col-4 col-md-3 col-lg-2">
                     <Link to="/Inicio" className="letracerrarsesion">
                        <i className="fas fa-power-off"></i>
                        <p>Cerrar sesión</p>
                    </Link>
                 </div>  
                                       
            </div> 
            <div className="row">
                <div className="col-6 col-md-9 col-lg-10  mesacarrito">
                    <div className="ms-3">
                        <span >1</span> 
                    </div>
                    <p>Mesa</p>  
                </div>
                <div className="col-6 col-md-3 col-lg-2 text-center iddelaorden">
                    <p>ID DE LA ORDEN: OO1</p>
                </div>
            </div>
            <div className="row align-items-center segundocuadro p-1">
                <div className="col-4 col-md-4 col-lg-6">
                    <p>Producto</p>
                </div>
                <div className="col-4 col-md-4 col-lg-3 text-center">
                    <p>Cantidad</p>
                </div>
                <div className="col-4 col-md-4 col-lg-3 text-center">
                    <p>Precio</p>
                </div>
            
            </div>  
 
            <div className="row align-items-center tercercuadro">
                <div className="col-4 col-md-4 col-lg-6">
                                            <p>Churrasco</p>
                                            <p>Baby Beef</p>
                                            <p>Empanadas</p>
                                            <p>Morcilla</p>
                                            <p>Limonada natural</p>
                                            <p>Postre de la casa</p>
                </div>
                <div className="col-4 col-md-4 col-lg-3 text-center">
                                            <p>Cant:1</p>
                                            <p>Cant:1</p>
                                            <p>Cant:2</p>
                                            <p>Cant:1</p>
                                            <p>Cant:2</p>
                                            <p>Cant:2</p>
                </div>
                <div className="col-4 col-md-4 col-lg-3 text-center">
                                            <p>$33.900</p>
                                            <p>$36.900</p>
                                            <p>$13.900</p>
                                            <p>$10.900</p>
                                            <p>$5.200</p>
                                            <p>$8.100</p>                                   
                </div>
                <hr />
            </div>
            <div className="row cuartocuadro">
                <div className="d-flex flex-column justify-content-start">
                <p>Subtotal: $136.100</p>
                <p>Impoconsumo (8%):$10.888</p>
                <p>Servicio (10%): $13.610</p>
                <p>Total:$160.598</p>
                </div>
            </div>
            <div className="row align-items-center quintocuadro p-3">
                <div className="col-12 col-md-4 col-lg-4 text-center">
                    <button className="anadirproducto" >Aceptar orden</button>
                </div>
                <div className="col-12 col-md-4 col-lg-4 text-center">
                    <button className="cancelarorden" >Cancelar orden</button>
                </div>
                <div className="col-12 col-md-4 col-lg-4 text-center">
                    <button className="anadirproducto" >Ver pedidos</button>
                </div>
            </div>
            <div className="row align-items-center quintocuadro">
                <div className="text-center imagenlogo">
                    <img src={logo} />
                </div>
            </div>
		</div>

		);
} 
export default CarritoCompras;