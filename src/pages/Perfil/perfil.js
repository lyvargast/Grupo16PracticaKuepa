import './perfil.css';
import Footer from '../../components/Footer/footer'
import imgperfil from './fotoperfil.png'
import NavBar from '../../components/NavBar/navbar';
function Perfil(){
	return(
	<div className="container-fluid">
    <NavBar />
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
               <h1 className="tituloconfi"> <i class="fas fa-user"></i> PERFIL</h1>
            </div>  
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-3">
            <img src={imgperfil} width='150px' />
            </div>
        </div>

        <div className="container">
            <div className="row mt-5">
                <div className=" col-xs-6 col-sm-6 col-md-1 col-lg-1 iconoperfil">
                <i class="fas fa-user "></i>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-11 col-lg-11 textoperfil">
                  <p>ID: 12345</p>  
                </div>
                <hr className="hrcolor"></hr>
            </div>

            <div className="row mt-3">
                <div className=" col-xs-3 col-sm-6 col-md-1 col-lg-1 iconoperfil">
                <i class="fas fa-user-secret"></i>
                </div>
                <div className="col-xs-8 col-sm-6 col-md-11 col-lg-11 textoperfil">
                  <p>Pepita Vargas Gonzalez</p>  
                </div>
                <hr></hr>
            </div>

            <div className="row mt-3">
                <div className=" col-xs-3 col-sm-6 col-md-1 col-lg-1 iconoperfil">
                <i class="fas fa-phone-square"></i>
                </div>
                <div className="col-xs-8 col-sm-6 col-md-11 col-lg-11 textoperfil">
                  <p>3191234567</p>  
                </div>
                <hr></hr>
            </div>
            <div className="row mt-3">
                <div className=" col-xs-6 col-sm-6 col-md-1 col-lg-1 iconoperfil">
                <i class="fas fa-lock"></i>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-11 col-lg-11 textoperfil">
                  <p>********</p>  
                </div>
                <hr></hr>
            </div>
        </div>


        
	</div>
		);
}

export default Perfil;