import './modalanadirproducto.css';
import React, {useState, useEffect} from "react";
import {fireDb} from '../../firebase';
 import { useParams, Link } from "react-router-dom";
const Modalview =() => {
    const firebaseDb = fireDb.database().ref()
	const [data, setData]=useState({});
    
    let currrentId = useParams();
    const {id} = currrentId;

    useEffect(() => {
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
    
    
    
    return(
	<div className="container mt-5">
         <div className="modal fade" id="Modalview" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
          <div className="cajaboton1 d-flex justify-content-end">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div className="modal-header justify-content-center">
          <div className="titulomodal "> 
              <h1 className="modal-title" id="exampleModalLabel">INFORMACIÓN DEL PRODUCTO</h1>
          </div>
          
      
        </div>
        <div className="modal-body">
        {Object.keys(data).map((userId) =>{
            if(userId === id) {
                return (
                   
                       <div className="card-body">
                         <p className="card-text">ID:{data[id].idproducto}</p>
                         <p className="card-text">CATEGORIA:{data[id].categoria}</p>
                         <p className="card-text">PRODUCTO:{data[id].producto}</p>
                         <p className="card-text">PRECIO:{data[id].precio}</p>
                       <Link to="/editarmenu">
                         <a className="btnanadirprodu2">REGRESAR</a>
                       </Link>
                       </div>
                  
                )
            };
        })}
     
        
        </div>
        <div className="modal-footer justify-content-center">
          <button type="button" className="btnanadirprodu2" data-bs-dismiss="modal">Guardar</button>
        </div>
      </div>
    </div>
  </div>
   
        	
	</div>
		
        );
}

export default Modalview;