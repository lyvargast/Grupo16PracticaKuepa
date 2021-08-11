import './modalanadirproducto.css';
import React, {useState,useEffect} from 'react';
import  firebaseDb from "../../firebase"
import {useHistory, useParams} from 'react-router-dom';
import {isEmpty} from "lodash"; 
function ModalAnadirProducto(){
	const values ={
      idproducto:"",
      categoria:"",
      producto:"",
      precio:"",
  };
const [data, setData]=useState({});
const [initialState, setState] = useState(values);
const {idproducto,categoria,producto,precio}=initialState;

const history = useHistory();

const  id  = localStorage.getItem("id");

useEffect(() =>{
  firebaseDb.child("Productos").on("value",(snapshot) =>{
      if(snapshot.val() !== null){
          setData({
              ...snapshot.val(),
          });
      } else {
          snapshot({});
      }
  });
},[id]);
//editar//
useEffect(() =>{
if(isEmpty(id)){
    setState({...values});
} else {
  setState({...data[id]});
}
},[id,data]);

const handleInputChange = (e) => {
  let {name, value} = e.target;
  setState({
    ...initialState,
    [name]: value,
  }); 
};
  
const handleSubmit = (e) =>{
  e.preventDefault();
  if (isEmpty(id)) {
  firebaseDb.child("Productos").push(initialState, (err) => {
    if(err){
      console.log(err);
    }
  }); 
} else {
    firebaseDb.child(`/Productos/${id}`).set(initialState, (err) => {
      if(err) {
        console.log(err);
      }
      localStorage.clear()
    });
  }
  
  
  history.push("/editarmenu");
};

  return(
    <div className="modal fade" id="ModalAnadirProducto" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
             <div className="modal-content">
                  <div className="cajaboton1 d-flex justify-content-end">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                <div className="modal-header justify-content-center">
                          <div className="titulomodal "> 
                              <h1 className="modal-title" id="exampleModalLabel">AÑADIR PRODUCTO</h1>
                          </div>
                </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                 
                  <div class="mb-3">
                              < input
                                type="text"
                                name="idproducto"
                                className="form-control" 
                                value={idproducto}
                                onChange={handleInputChange}
                                placeholder="ID" 
                                id="identificadorCategoria" 
                                rows="2"  
                              />
                    </div>
                    <div class="mb-3">
                              < input
                                type="text"
                                name="categoria"
                                class="form-control" 
                                value={categoria}
                                onChange={handleInputChange}
                                placeholder="Nombre de la categoria" 
                                id="nomcat" 
                                rows="2"  
                              />
                    </div>
                    <div class="mb-3">
                              < input
                                type="text"
                                name="producto"
                                class="form-control" 
                                value={producto}
                                onChange={handleInputChange}
                                placeholder="Nombre del producto" 
                                id="nombreproducto" 
                                rows="2"  
                              />
                    </div>
                    <div class="mb-3">
                              < input
                                type="text"
                                name="precio"
                                class="form-control"
                                value={precio}
                                onChange={handleInputChange} 
                                placeholder="Precio" 
                                id="identificadorprecio" 
                                rows="2"  
                              />
                    </div>
                    <div className="mb-3">
                               <input className="form-control" 
                                    type="file" 
                                    id="formFile"
                                    
                                /> <label>Añadir Imagen</label>    
                    </div>
                </div>
                    <div className="modal-footer justify-content-center">
                      <button type="submit" className="btnanadirprodu2" data-bs-dismiss="modal">Guardar</button>
                    </div>
             </form>
      </div>
    </div>
  </div>
    

		);

}
export default ModalAnadirProducto;