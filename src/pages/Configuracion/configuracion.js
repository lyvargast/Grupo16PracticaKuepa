import './configuracion.css';
import Footer from '../../components/Footer/footer'
import NavBar from '../../components/NavBar/navbar';

function Configuracion(){
	return(
    
	<div className="container-fluid">
        <NavBar />
        <div >
            
            <div className="text-center mt-5">
                <h1 className="tituloconfi"><i className="fas fa-cogs"></i> CONFIGURACIÓN</h1>
            </div>

            
                <div className="opcionconfi mt-5">
                    <p><i className="fas fa-camera mx-2 mt-2"></i> Cambiar Foto </p>
                    <div className="flecha"><i className="fas fa-chevron-right  mt-2"></i></div>
                </div>

                <div className="opcionconfi mt-5">
                    <p><i className="fas fa-phone-square mx-2 mt-2"></i> Cambiar Télefono </p>
                    <div className="flecha"><i class="fas fa-chevron-right  mt-2"></i></div>
                </div>

                <div className="opcionconfi mt-5">
                    <p><i className="fas fa-lock mx-2 mt-2"></i> Cambiar Contraseña</p>
                    <div className="flecha"><i class="fas fa-chevron-right  mt-2"></i></div>
                </div>
           
        </div>

        	
	</div>
		);
}

export default Configuracion;