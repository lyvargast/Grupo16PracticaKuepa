import './navproductos.css';
import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

function NavProductos(){
return(
<div>
	<nav className="navbar1 fixed-top navbar-dark align-bottom p-3">
	  <div className="container-fluid">
	        <a className="navbar-brand d-lg-none"></a>
	        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	          <span className="navbar-toggler-icon"></span>
	        </button>

	        <div className="collapse navbar-collapse" id="navbarSupportedContent">
	          <ul  className="nav mb-1 mb-lg-0 mx-auto">
	            
                <li className="nav-item">
	              <NavLink to="/" activeclassname="active" className="nav-link" target="_self" >ENTRADAS</NavLink>
	            </li>
	            
                <li className="nav-item">
	              <NavLink to="/" activeclassname="active" className="nav-link" target="_self">SANDWICHES</NavLink>
	            </li>
	          
	            <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">RES</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">POLLO</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">PESCADO</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">CERDO</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">PARRILLERITOS</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">COTIDIANOS</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link text-center" target="_self">OTRAS OPCIONES</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link text-center" target="_self">EN CASA</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">BEBIDAS</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link text-center" target="_self">BEBIDAS ALCOHÓLICAS</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">BONOS REGALO</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">POSTRES</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link" target="_self">ACOMPAÑAMIENTOS</NavLink>
                </li>
	         
	            
	          </ul>
	        </div>
	  </div>
	</nav>
</div>

	);

}
export default NavProductos;
