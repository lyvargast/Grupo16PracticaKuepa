import React from 'react';
import hamburguesa from './bars.png'
import equis from './equis.png'
import cubiertos from './cubiertos.png'

export const SidebarData = [
    {
        titulo:'TOMAR PEDIDO',
        path:'/seleccionarmesa',
        img:<img src={cubiertos}/>,
        cName: 'nav-text'
    },
    {
        titulo:'TODAS LAS ORDENES',
        path:'/historialpedido',
        img:<img src={cubiertos}/>,
        cName: 'nav-text'
    },
    {
        titulo:'EDITAR MENÚ',
        path:'/editarmenu',
        img:<img src={cubiertos}/>,
        cName: 'nav-text'
    },
    {
        titulo:'CONFIGURACIÓN',
        path:'/configuracion',
        img:<img src={cubiertos}/>,
        cName: 'nav-text'
    },
    {
        titulo:'CERRAR SESIÓN',
        path:'/',
        img:<img src={cubiertos}/>,
        cName: 'nav-text'
    }

]