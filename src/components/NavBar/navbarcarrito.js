import React, {useState} from 'react';
import './navbarcarrito.css'
import hamburguesa from './bars.png'
import carrito from './carrito.png'
import user from './user.png'
import volver from './volver.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { SidebarData } from './SidebarData';

function NavBarCarrito(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
	return (
		<>
        
                <div className="navbar">
                    <div className="menu-bars">
                        <Link to="#" className="hamburguesa">
                            <img src={hamburguesa} onClick={showSidebar}/>
                        </Link>
                        <Link to="/perfil" className="senor">
                                <img src={user} /> 
                        </Link>
                    </div>
                    <div className="navbarmunecos">
                        <Link to="/menu" className="volveralmenu">
                            <img src={volver} />
                                
                        </Link>
                        <Link to="/carrito" className="menu-carrito">
                                <img src={carrito} />
                        </Link>
                    </div>
                </div>
                   <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                        <ul className='nav-menu-items ulcolor' onClick={showSidebar}>
                            <li className="navbar-toggle">
                            </li>
                            {SidebarData.map((item, index) => {
                                return(
                                    <li key={index} className={item.cName}>
                                        <div className="elena">
                                            {item.foto}
                                        </div>
                                        <Link to={item.path}>
                                           
                                            {item.img}
                                            
                                            <span className="span1">
                                                {item.titulo}
                                                <hr className="hrs"/>
                                            </span>
                                        </Link>
                                       <div className="logonavbar">
                                        {item.fotito}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>



                    </nav>
             </>
                    
                           
			


		);
} 
export default NavBarCarrito;