import './barralateralcategoria.css';
import {
    BrowserRouter as Router,
    NavLink,
  }
  from "react-router-dom";

function BarraLateralCategoria() {
    return(
              <div className="cajaBtn">
                  <button className="btn" ><NavLink to="" activeClassName='active'>ENTRADAS</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>SÁNDWICHES</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>RES</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>POLLO</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>PESCADOS</NavLink></button>  
                  <button className="btn"><NavLink to="" activeClassName='active'>CERDO</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>PARRILERITOS</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>COTIDIANOS</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>OTRAS OPCIONES</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>EN CASA</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>BEBIDAS</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>BEBIDAS ALCOHÓLICAS</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>BONOS REGALO</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>POSTRES</NavLink></button>
                  <button className="btn"><NavLink to="" activeClassName='active'>ACOMPAÑAMIENTOS</NavLink></button>
              </div>
      );
  }
  
  export default BarraLateralCategoria;