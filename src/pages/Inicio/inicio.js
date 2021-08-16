import './inicio.css';
import logoininicio from "./logoinicio.PNG";
import swal from 'sweetalert2';

function Inicio(){ 

	
	
	function Ingreso(){
		let usuario=document.getElementById("usuario").value
		let contra=document.getElementById("contra").value
		
		
		
		console.log(usuario)
		console.log(contra)
	  
		if (usuario==="user123" && contra==="12345"){
			swal.fire({
				icon: 'success',
				title: 'Bienvenido',
				titleColor: 'blue',
				confirmButtonColor: '#EC6E21',
				cancelButtonColor: '#CB262A',
			  })
			window.location.replace('/seleccionarmesa')
		}
			
		else{
			
			swal.fire({
				icon: 'error',
				title: 'Oops...',
				titleColor: '#451a11',
				text: 'Los Datos ingresados son incorrectos'
			  })
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
					  <select class="form-select form-select-lg  dropdowncolor" aria-label=".form-select-lg example" id="ciudad">		  
						<option selected>CIUDAD</option>
						<option value="1">Bogotá</option>
						<option value="2">Medellín</option>
						<option value="3">Cali</option>
						<option value="4">Popayan</option>
						<option value="5">Tulúa</option>
						<option value="6">Palmira</option>
                        <option value="7">Villavicencio</option>
						<option value="8">Cartago</option>
					  </select>
						
					</div>



                    <div className="mb-2">
					<select class="form-select form-select-lg dropdowncolor" aria-label=".form-select-lg example" id="restaurante">		  
						<option selected className="seleccionado">SEDE</option>
						<option value="1">Parque la Colina</option>
						<option value="2">Bazar Chia</option>
						<option value="3">Gran Estación </option>
						<option value="4">Calima</option>
						<option value="5">Aeropuerto</option>
						<option value="6">Zuca Plaza</option>
					  </select>
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
					
						<button class="btn btn-primary" type="submit" onClick={Ingreso}	  
						>INGRESAR</button>
					
					</div>       
				</div>
			</div>
		
 </div>
 </body>
   );
  }
   export default Inicio;