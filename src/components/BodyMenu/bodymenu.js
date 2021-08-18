import './bodymenu.css'
import steak from './steak.png'
import CardMenu from './cardmenu';
import entradas from './imagenesmenu/entradas.PNG'
import sandwiches from './imagenesmenu/sandwiches.PNG'
import res from './imagenesmenu/res.PNG'
import pollo from './imagenesmenu/pollo.PNG'
import pescados from './imagenesmenu/pescados.PNG'
import cerdo from './imagenesmenu/cerdo.PNG'
import parrilleritos from './imagenesmenu/parrilleritos.PNG'
import cotidianos from './imagenesmenu/cotidianos.PNG'
import otrasopciones from './imagenesmenu/otrasopciones.PNG'
import encasa from './imagenesmenu/casa.PNG'
import bebidas from './imagenesmenu/bebidas.PNG'
import bebidasalcoholicas from './imagenesmenu/alcohol.PNG'
import bonosregalo from './imagenesmenu/bonos.PNG'
import postres from './imagenesmenu/postres.PNG'
import acompanamientos from './imagenesmenu/Acompañamientos.PNG'
import NavBar from '../NavBar/navbar';
import { useState } from 'react';


const arreglomenu=[
    {
        id:1,
        imgs:entradas,
        titulo:'ENTRADAS'
    },
    {
        id:2,
        imgs:sandwiches,
        titulo:'SÁNDWICHES'
    },
    {
        id:3,
        imgs:res,
        titulo:'RES'
    },
    {
        id:4,
        imgs:pollo,
        titulo:'POLLO'
    },
    {
        id:5,
        imgs:pescados,
        titulo:'PESCADOS'
    },
    {
        id:6,
        imgs:cerdo,
        titulo:'CERDO'
    },
    {
        id:7,
        imgs:parrilleritos,
        titulo:'PARRILLERITOS'
    },
    {
        id:8,
        imgs:cotidianos,
        titulo:'COTIDIANOS'
    },
    {
        id:9,
        imgs:otrasopciones,
        titulo:'OTRAS OPCIONES'
    },
    {
        id:10,
        imgs:encasa,
        titulo:'EN CASA'
    },
    {
        id:11,
        imgs:bebidas,
        titulo:'BEBIDAS'
    },
    {
        id:12,
        imgs:bebidasalcoholicas,
        titulo:'BEBIDAS ALCOHÓLICAS'
    },
    {
        id:13,
        imgs:bonosregalo,
        titulo:'BONOS REGALO'
    },
    {
        id:14,
        imgs:postres,
        titulo:'POSTRES'
    },
    {
        id:15,
        imgs:acompanamientos,
        titulo:'ACOMPAÑAMIENTOS'
    },

]

function BodyMenu(){
	
    return (
		<div className="container-fluid overflow-hidden fondobodymenu">
            <NavBar/>
            <div className="row cajatitulomenu">
                <div className="col-12 col-md-3 col-lg-4 steak">
                    <img src={steak} alt="ícono steak"/>
                </div>
                <div className="col-12 col-md-3 col-lg-8 letramenu">
                    <h1>MENÚ</h1>
                </div>
            </div>

                <div className="row cajasmenu">
                    {
                        arreglomenu.map(menucito=>(
                            
                            <div className="col-12 col-md-4 col-lg-3" key={menucito.id}>
                                <a href={`/menu/${menucito.titulo}`}>
                                    <CardMenu imagenes={menucito.imgs} title={menucito.titulo} />
                                </a>
                            </div>
                            
                    ))
                    }
                    
                </div>
                
                
                    
                      
		</div>


		);
} 
export default BodyMenu;