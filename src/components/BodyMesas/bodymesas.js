import './bodymesas.css'
import table1 from './table1.png';
import table2 from './table2.png';
import table3 from './table3.png';
import table4 from './table4.png';
import table5 from './table5.png';
import table6 from './table6.png';
import table7 from './table7.png';
import table8 from './table8.png';
import izq from './izq.png'
import der from './der.png'
import NavBar from '../NavBar/navbar';
function BodyMesas(){
	return (
		<div className="container-fluid overflow-hidden fondobodymesas">
            <NavBar />
			<section>
                <div className=" row text-center">
                    <img src={izq} alt="Foto planta" className="col-4 col-md-4 col-lg-4 fotoplanta mt-5"/>
                    <h1 className="titulo col-4 col-md-4 col-lg-4">SELECCIONA LA MESA</h1>
                    <img src={der} alt="Foto planta" className="col-4 col-md-4 col-lg-4 fotoplanta mt-5"/>
                </div>
				
                    <div className="row text-center">
                            <div className="col-6 col-md-3 col-lg-3 cajasmesas">
                                <a href={`/menu`}>

                                    <img src={table1} alt="Foto número" className="table"/>
                                </a>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 cajasmesas">
                                <a href={`/menu`}>
                                    <img src={table2} alt="Foto número" className="table"/>
                                </a>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 cajasmesas">
                                <a href={`/menu`}>
                                <img src={table3} alt="Foto número" className="table"/>
                                </a>	
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 cajasmesas">
                                <a href={`/menu`}>
                                <img src={table4} alt="Foto número" className="table"/>
                                </a> 
                            </div>
                        </div>
                    
                
                        <div className="row text-center">
                            <div className=" col-6 col-md-3 col-lg-3 cajasmesas">
                                <a href="#">
                                    <img src={table5} alt="Foto número" className="table"/>
                                </a>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 cajasmesas">
                                <a href="#">
                                    <img src={table6} alt="Foto número" className="table"/>
                                </a>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 cajasmesas">
                                <a href="#">
                                    <img src={table7} alt="Foto número" className="table"/>
                                </a>	
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 cajasmesas">
                                <a href="#">
                                <img src={table8} alt="Foto número" className="table"/>
                                </a> 
                            </div>
                        </div>
                
			
			</section>
		</div>


		);
} 
export default BodyMesas;