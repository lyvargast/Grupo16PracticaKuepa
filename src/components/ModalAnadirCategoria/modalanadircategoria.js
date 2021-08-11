import './modalanadircategoria.css';
import {useState} from "react";

function ModalAnadirCategoria(){
  
  const initialStateValues = {
    imgcategoria:'',
    titulocategoria:''
  };

  const [ values, setValues] = useState(initialStateValues);
  
  const handleInputChange = (e) =>{
      const {name, value} = e.target;
      setValues({...values, [name]:value })
      console.log(name,value)
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(values);
  };
	return(
    <div className="modal fade" id="ModalCategoria" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
            <div className="modal-content">
                  <div className="cajaboton1 d-flex justify-content-end">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
              <div className="modal-header justify-content-center">
                  <div className="titulomodal "> 
                      <h1 className="modal-title" id="exampleModalLabel">AÑADIR CATEGORÍA</h1>
                  </div>
              </div>
              <form  onSubmit={handleSubmit}>
                  <div className="modal-body">
                        <div class="mb-3">
                            <input 
                               class="form-control" 
                               name="anadirimg" 
                               type="file" id="formFile" 
                               onChange={handleInputChange}
                              />
                              <label for="formFile" class="form-label d-flex justify-content-center">
                                Añadir imagen
                              </label>
                        </div>
                        <div class="mb-3">
                              < input
                                type="text"
                                name="nombrecategoria"
                                class="form-control" 
                                placeholder="Inserte el nombre de la categoría" 
                                id="exampleFormControlTextarea1" 
                                rows="2"
                                onChange={handleInputChange}
                                 
                              />
                              
                        </div>
                  </div>

                  <div className="modal-footer justify-content-center">
                      <button type="button" className="btnanadirprodu2" data-bs-dismiss="modal" >Guardar</button>
                  </div>
              </form>
           </div>
         </div>
     </div>
    

		);

}
export default ModalAnadirCategoria;