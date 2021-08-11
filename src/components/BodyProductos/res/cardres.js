import './bodyproductosres.css'

function CardRes(props){
	return (

            <div className="card tarjetares mb-5" >
                <img src={props.imagenes} className="card-img-top partearribacard text-center"  alt="Foto Res"/>
                <div className="card-body cajaproductos">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="precio">{props.price}</p>
                    <div className="cajabotones">
                        <a href="#" className="naranja">Agregrar +</a>
                        <a href="#" className="beige">Remover -</a>
                    </div>
                </div>
            </div>

		);
} 
export default CardRes;




