import './inicio.css'
import React, {useState} from "react"
import logoininicio from "./logoinicio.PNG"
import { Dropdown,DropdownItem,DropdownMenu, DropdownToggle } from 'reactstrap'

function Inicio(){ 
	const [dropdown, setDropdown]=useState(false);
	const abrirCerrarDropdown=()=>{
		setDropdown(!dropdown);
	}
	const [dropdown1, setDropdown1]=useState(false);
	const abrirCerrarDropdown1=()=>{
		setDropdown1(!dropdown1);
	}
    
	function Ingreso(){
		let usuario=document.getElementById("usuario").value
		let contra=document.getElementById("contra").value
		console.log(usuario)
		console.log(contra)
	  
		if (usuario==="user123" && contra==="12345"){
			alert("Bienvenido")
		}
			
		else{
			alert("Los Datos ingresados son incorrectos")
		}
	}

	return(
	<body className="fondoinicio">	
	<div className="container-fluid ">
		
					<div className="logoinicio">
					<img src={logoininicio} width='350px' />
					</div>
			<div className="card caja "> 
				<div className="card-body">
					<h4 className="tituloingreso" >INGRESO ADMINISTRADOR</h4>
				    <div className="mb-2">

							<Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} className="dropprincipal">
							<DropdownToggle caret className="dropdowncolor">
							<i className="fas fa-map-marker-alt claseiconociu"></i> CIUDAD 
							</DropdownToggle>
							<DropdownMenu left className="fondodrop">
								<DropdownItem className="itemdropdown">Bogotá</DropdownItem>
								<DropdownItem className="itemdropdown">Medellín </DropdownItem>
								<DropdownItem className="itemdropdown">Cali</DropdownItem>
								<DropdownItem className="itemdropdown">Armenia</DropdownItem>
								<DropdownItem className="itemdropdown">Popayan</DropdownItem>
								<DropdownItem className="itemdropdown">Tulúa</DropdownItem>
								<DropdownItem className="itemdropdown">Palmira</DropdownItem>
								<DropdownItem className="itemdropdown">Villaviencio</DropdownItem>
								<DropdownItem className="itemdropdown">Cartago</DropdownItem>
							</DropdownMenu>
							</Dropdown>
					</div>



                    <div className="mb-2">
							<Dropdown isOpen={dropdown1} toggle={abrirCerrarDropdown1} className="dropprincipal ">
							<DropdownToggle caret className="dropdowncolor">
							<i class="fas fa-landmark"></i> SEDE
							</DropdownToggle>
							<DropdownMenu className="fondodrop">
							<DropdownItem className="itemdropdown">Parque La Colina</DropdownItem>
							<DropdownItem className="itemdropdown">Bazar Chia</DropdownItem>
							<DropdownItem className="itemdropdown">Gran Estación </DropdownItem>
							<DropdownItem className="itemdropdown">Calima</DropdownItem>
							<DropdownItem className="itemdropdown">Aeropuerto</DropdownItem>
							<DropdownItem className="itemdropdown">Zuca Plaza</DropdownItem>
								
							</DropdownMenu>
							</Dropdown>
					 </div> 
				
					<div class="input-group mb-2 usuarioinput">
						<span className="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
						<input 
						    type="text" 
							className="form-control" 
							placeholder="USUARIO"  
							id="usuario"
							aria-describedby="basic-addon1" />
                    </div> 
					<div class="input-group mb-2 usuarioinput">
						<span className="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
						<input 
						  type="password" 
						  className="form-control" 
						  placeholder="CONTRASEÑA"
						  id="contra"  
						  aria-describedby="basic-addon1" />
                    </div> 
					<div class="d-grid gap-3 col-12 mx-auto botoningresar">
					<a href={`/seleccionarmesa`}>
						<button class="btn btn-primary" type="submit" onClick={Ingreso}	  
						>INGRESAR</button>
					</a>
					</div>       
				</div>
			</div>
		
 </div>
 </body>
   );
  }
   export default Inicio;