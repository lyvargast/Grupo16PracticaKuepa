import { CardText } from 'reactstrap';
import './bodyproductosres.css'

function CardRes(props, cart, setCart){
	return (

            <div className="card tarjetares mb-5" >
                <img src={props.imagenes} className="card-img-top partearribacard text-center"  alt="Foto Res"/>
                <div className="card-body cajaproductos">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="precio">{props.price}</p>
                    <div className="cajabotones">
                        <a href="#" className="naranja">Agregar +</a>
                        <a href="#" className="beige">Remover -</a>
                    </div>
                </div>
            </div>

		);
} 
export default CardRes;




