import React, {useState} from 'react';
import './navbar.css'
import hamburguesa from './bars.png'
import cerrar from './cerrar.png'
import user from './user.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { SidebarData } from './SidebarData';

function NavBar(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
	return (
		<>
        
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <img src={hamburguesa} onClick={showSidebar}/>
                    </Link>
                    <div className="navbarmuñecos">
                        <Link to="/perfil" className="menu-user">
                            <img src={user} />
                            
                        </Link>
                        <Link to="/Inicio" className="menu-cerrar">
                            <img src={cerrar} />
                            
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
export default NavBar;