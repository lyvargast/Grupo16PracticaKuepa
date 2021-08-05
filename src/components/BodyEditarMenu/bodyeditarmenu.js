import './bodyeditarmenu.css'
import CardEditarProducto from './cardeditarproducto';
import ModalEditarCategoria from '../ModalEditarCategoria/modaleditarcategoria';
import { Dropdown,DropdownItem,DropdownMenu, DropdownToggle } from 'reactstrap'
import React, {useState} from "react"
import ModalAnadirProducto from '../ModalAnadirProducto/modalanadirproducto';

const arregloproductos=[
  {
    id:1,
    titulo:"CHURRASCO 230 G"
  },
 
  {
    id:2,
    titulo:"BABY BEEF"
  },

  {
    id:3,
    titulo:"PUNTA DE ANCA"
  },

  {
    id:4,
    titulo:"BIFE CHORIZO 430 G"
  },

  {
    id:5,
    titulo:"LOMITO EN SALSA"
  },
]

function BodyEditarMenu() {
  const [dropdown, setDropdown]=useState(false);
	const abrirCerrarDropdown=()=>{
		setDropdown(!dropdown);
	}
    return(
      <div className="backcolo">
      <div className="botondrop">
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction="right">
              <DropdownToggle  className="dropdowncategoria">
                  <div className="titulodropcat"> 
                     <h1>RES </h1>
                   </div> 
                   <div className="kebab">
                      <i class="fas fa-ellipsis-v"></i>
                   </div>
              </DropdownToggle>
                <DropdownMenu left className="opcioneseditar">
                  <DropdownItem className="editar" data-bs-toggle="modal" data-bs-target="#ModalEditarCategoria" ><i class="fas fa-pencil-alt"></i> EDITAR</DropdownItem>
                  <DropdownItem className="eliminar"><i class="fas fa-trash-alt"></i> ELIMINAR</DropdownItem>
                </DropdownMenu>
              </Dropdown>
      </div>
      
      <div className="container fondobodyeditarm ">
         <div className="row ">
        {
            arregloproductos.map(producticos=>( 
              <div className="col-12 col-md-10 col-lg-6 mb-3">
                <CardEditarProducto title={producticos.titulo} />
              </div>               
            ))   
        }
         </div>
      </div>
       
      <div className="text-center"> <button className="btnanadirprodu" data-bs-toggle="modal" data-bs-target="#ModalAnadirProducto">AÑADIR PRODUCTO</button></div>
        <ModalAnadirProducto />
  </div>
      );
  }
  
  export default BodyEditarMenu;