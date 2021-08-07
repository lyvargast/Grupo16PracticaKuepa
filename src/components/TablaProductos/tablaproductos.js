import './tablaproductos.css';
import React,{useState, useEffect} from "react";
import firebaseDb from '../../firebase';
import {Link, link} from "react-router-dom";

const TablaProductos = () =>{

const [data, setData]=useState({});

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
},[]);

const onDelete = (id) => {
    if(window.confirm("¿Está seguro que desea borrar este producto?")) {
        firebaseDb.child(`Productos/${id}`).remove((err) => {
            if (err) {
                console.log(err);
            }
        }); 
    }
};

return(
<div className="container mt-5">
    <div className="row">
        <div className=" col-sm-6 col-md-12 col-lg-12">
           <table className="table table-boarded table-striped py-2">
              <thead className="thead-dark">
                  <tr className="colortitulotabla">
                      <th className="ms-2">ID PRODUCTO</th>
                      <th>CATEGORIA</th>
                      <th>PRODUCTO</th>
                      <th>PRECIO</th>
                      <th>IMAGEN</th>
                      <th>ACCIONES</th>
                  </tr>
              </thead>
              <tbody>
                  {Object.keys(data).map((id) =>{
                      return(
                        <tr key={id}>
                            <th scope="row">{data[id].idproducto}</th>
                            <td>{data[id].categoria}</td>
                            <td>{data[id].producto}</td>
                            <td>{data[id].precio}</td>
                            <td>
                              
                                <button className="btn text-primary"
                                data-bs-toggle="modal" 
                                data-bs-target="#ModalAnadirProducto"
                                onClick={ ()=>{ localStorage.setItem("id",id)}}>
                                   <i class="fas fa-pencil-alt"></i>
                                </button>
                          
                              <Link>
                                <a className="btn text-danger" 
                                  onClick={() => onDelete(id)}>
                                   <i class="fas fa-trash-alt"></i>
                                </a>
                              </Link>
                              <Link to={`/view/${id}`}>
                                <a className="btn text-info">
                                <i class="fas fa-eye"></i>
                                </a>
                              </Link>

                            </td>
                        </tr>
                      );
                  })}
              </tbody>   
           </table>
        </div>

    </div>
</div>

	);

}
export default TablaProductos;
