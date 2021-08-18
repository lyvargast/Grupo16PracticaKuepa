import React from "react";
import Inicio from './pages/Inicio/inicio';
import SelecMesa from './pages/SelecMesa/selecmesa';
import Menu from './pages/Menu/menu';
import Productos from './pages/Productos/productos';
import HistorialPedidos from './pages/HistorialPedidos/historialpedidos';
import EditarMenu from './pages/EditarMenu/editarmenu';
import Configuracion from './pages/Configuracion/configuracion';
import Perfil from './pages/Perfil/perfil';
import Error404 from './pages/Error404/error404';
import View from "./components/ModalAnadirProducto/view";
import CarritoCompras from "./components/CarritoCompras/carritocompras";


import Res from '../src/components/BodyProductos/res/res'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() { 

  return (
    <div>
  
    <Router basename={process.env.PUBLIC_URL}>       
        <Switch>
              <Route exact path="/Inicio">
                <Inicio />
              </Route>
              <Route exact path="/">
                <Inicio />
              </Route>
              <Route exact path="/seleccionarmesa">
                <SelecMesa />
              </Route>
              <Route exact path="/menu">
                <Menu />
              </Route>
              <Route exact path="/productos">
                <Productos />
              </Route>
              <Route exact path="/historialpedido">
                <HistorialPedidos />
              </Route>
              <Route exact path="/editarmenu">
                <EditarMenu />
              </Route>
              <Route exact path="/configuracion">
                <Configuracion />
              </Route>
              <Route exact path="/perfil">
                <Perfil />
              </Route>
              

              <Route exact path="/menu/:categoria">
                <Res />
              </Route>
              <Route exact path="/carrito">
                <CarritoCompras />
              </Route>

             




              <Route exact path="*">
                <Error404 />
              </Route>
        </Switch>
    </Router>
    </div>
    
  );
}
export default App;





