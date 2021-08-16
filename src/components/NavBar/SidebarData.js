import React from 'react';
import hamburguesa from './bars.png'
import equis from './equis.png'
import cubiertos from './cubiertos.png'
import bell from './bell.png'
import editar from './editar.png'
import configuracion from './config.png'
import cerrar from './cerrar.png'
import elena from './elena.png'
import logo from './logo.png'
export const SidebarData = [
   {
       foto:<img src={elena} />
    },
    {
        titulo:'TOMAR PEDIDO',
        path:'/seleccionarmesa',
        img:<img src={cubiertos}/>,
        cName: 'nav-text'
    },
    {
        titulo:'TODAS LAS ORDENES',
        path:'/historialpedido',
        img:<img src={bell}/>,
        cName: 'nav-text'
    },
    {
        titulo:'EDITAR MENÚ',
        path:'/editarmenu',
        img:<img src={editar}/>,
        cName: 'nav-text'
    },
    {
        titulo:'CONFIGURACIÓN',
        path:'/configuracion',
        img:<img src={configuracion}/>,
        cName: 'nav-text'
    },
    {
        titulo:'CERRAR SESIÓN',
        path:'/',
        img:<img src={cerrar}/>,
        cName: 'nav-text'
    },
   {
      fotito:<img src={logo}/>
   }

]