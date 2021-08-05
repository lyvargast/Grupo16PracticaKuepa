import './bodyeditarmenu.css'
import ModalEditarProducto from '../ModalEditarProducto/modaleditarproducto';
import { Dropdown,DropdownItem,DropdownMenu, DropdownToggle } from 'reactstrap'
import React, {useState} from "react"
function CardEditarProducto(props){
    
    const [dropdown1, setDropdown1]=useState(false);
	const abrirCerrarDropdown1=()=>{
		setDropdown1(!dropdown1);
	}
    return (   <div className="container fondocard ">
                    <div className="botonproducto">
                    <Dropdown isOpen={dropdown1} toggle={abrirCerrarDropdown1} direction="down" direction="right" >
							<DropdownToggle  className="botonproduc">
                             <div className="tituloprodu"> 
                                <h3>{props.title}</h3>
                             </div> 
                             <div className="kebab2">
                                 <i class="fas fa-ellipsis-v"></i>
                             </div>
							</DropdownToggle>
							<DropdownMenu left className="opcioneseditar">
								<DropdownItem className="editar" data-bs-toggle="modal" data-bs-target="#ModalEditarProducto" ><i class="fas fa-pencil-alt"></i> EDITAR</DropdownItem>
								<DropdownItem className="eliminar"><i class="fas fa-trash-alt"></i> ELIMINAR</DropdownItem>
							</DropdownMenu>
							</Dropdown>
                        
                    </div>
                    <ModalEditarProducto />
              </div>   
		);
} 
export default CardEditarProducto;