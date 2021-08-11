import './modalanadirproducto.css';
import React, {useState, useEffect} from "react";
import {fireDb} from '../../firebase';
 import { useParams, Link } from "react-router-dom";
const View =() => {
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
        {Object.keys(data).map((userId) =>{
            if(userId === id) {
                return (
                    <div className="card cardinfoproducto" >
                       <div className="card-header titulomodal">
                          <h1 className=" text-center">INFORMACIÓN DEL PRODUCTO</h1>
                       </div>
                       <div className="card-body">
                         <p className="card-text">ID:{data[id].idproducto}</p>
                         <p className="card-text">CATEGORIA:{data[id].categoria}</p>
                         <p className="card-text">PRODUCTO:{data[id].producto}</p>
                         <p className="card-text">PRECIO:{data[id].precio}</p>
                       <Link to="/editarmenu">
                         <a className="btnanadirprodu2">REGRESAR</a>
                       </Link>
                       </div>
                    </div>
                )
            }
        })}
        	
	</div>
		
        );
}

export default View;