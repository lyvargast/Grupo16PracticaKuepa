import './bodymenu.css'

function CardMenu(props){
	return (

            <div className="card cajamenuprincipal">
            <a href="#"><img src={props.imagenes} className="card-img-top" alt="Foto Entradas"/></a>
                <div className="card-body cajatitulomenuprincipal">
                    <h5 className="card-title">{props.title}</h5>
                </div>
            </div>

		);
} 
export default CardMenu;
    
    
    
    
    
    
    