import './bodyhistorialpedidos.css'

function BodyHistorialPedidos(){
	return (
		<div className="container-fluid overflow-hidden fondohistorialpedidos">
			<section>
        
				<div className="row align-items-center">
                   
                            <div className="cajahistorialpedidos">
                                <div className="row bannernaranja">
                                    <div className="calendario m-1">
                                        <div className="col-4 col-md-1 col-lg-1 p-3">
                                            <p>Mesa <span>1</span></p>
                                        </div>
                                        <div className="col-4 col-md-9 col-lg-9 d-flex p-3 fecha">
                                            <i className="fas fa-calendar-alt m-1"></i>
                                            <p>Sábado,17 de Julio de 2021</p>
                                        </div>
                                    
                                        <div className="ordenes col-4 col-md-2 col-lg-2" >
                                            <span>ID de la orden</span>
                                            <p>Total: $160.500</p>
                                        </div>

                                    </div>
                                   
                                </div>
                             <div className="container">
                                <div className="row bannerbeige">
                                    <div className="bannerbeigeflex">
                                        <div className="lista col-4 col-md-2 col-lg-3">
                                            <p>Churrasco</p>
                                            <p>Baby Beef</p>
                                            <p>Empanadas</p>
                                            <p>Morcilla</p>
                                            <p>Limonada natural</p>
                                            <p>Postre de la casa</p>
                                        </div>
                                        <div className="col-4 col-md-2 col-lg-3">
                                            <p>Cant:1</p>
                                            <p>Cant:1</p>
                                            <p>Cant:2</p>
                                            <p>Cant:1</p>
                                            <p>Cant:2</p>
                                            <p>Cant:2</p>
                                        </div>
                                        <div className="col-4 col-md-2 col-lg-2">
                                            <p>$33.900</p>
                                            <p>$36.900</p>
                                            <p>$13.900</p>
                                            <p>$10.900</p>
                                            <p>$5.200</p>
                                            <p>$8.100</p>                                   
                                        </div>
                                        <div className="col-4 col-md-2 col-lg-4 flex-column  justify-content-between p-5">
                                            <div>
                                                <button className="anadirproducto" >Añadir producto</button>
                                            </div>
                                            <div>
                                            <button className="eliminarproducto" >Eliminar producto</button>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    
                                </div>  
                            </div>
                        </div>                      
				</div>
			</section>
		</div>


		);
} 
export default BodyHistorialPedidos;