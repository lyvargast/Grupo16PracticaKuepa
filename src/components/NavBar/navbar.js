import React, {useState} from 'react';
import './navbar.css'
import hamburguesa from './bars.png'
import equis from './equis.png'
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
                </div>
                   <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                        <ul className='nav-menu-items'>
                            <li className="navbar-toggle py-3">
                                <Link to="#" className="menu-bars">
                                <img src={equis} onClick={showSidebar}/>
                                </Link>

                            </li>
                            {SidebarData.map((item, index) => {
                                return(
                                   
                                    <li key={index} className={item.cName}>
                                        {item.foto}
                                        <Link to={item.path}>
                                            {item.img}
                                            <span className="span1">{item.titulo}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>



                    </nav>
             </>
                    
                           
			


		);
} 
export default NavBar;