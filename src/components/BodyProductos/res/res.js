import './bodyproductosres.css'
import React, { Fragment, useState } from "react";
import CardRes from './cardres';
import churrasco from './churrasco.png';
import babybeef from './babybeefnobg.png'
import puntadeanca from './puntadeancanobg.png'
import bifedechorizo from './bifechorizonobg.png'
import lomitoensalsa from './lomitoensalsanobg.png'
import { useParams } from 'react-router-dom';
import NavBarCarrito from '../../NavBar/navbarcarrito';
//Estado de res con lista de res
function Res(){

const [arreglores, setRes] = useState([
    {
        id:1,
        imgs:churrasco,
        titulo:'CHURRASCO 230 g',
        precio:'$33.900'
    },
    {
        id:2,
        imgs:babybeef,
        titulo:'BABY BEEF',
        precio:'$36.900'
    },
    {
        id:3,
        imgs:puntadeanca,
        titulo:'PUNTA DE ANCA',
        precio:'$32.900'
    },
    {
        id:4,
        imgs:bifedechorizo,
        titulo:'BIFE CHORIZO 430 g',
        precio:'$43.900'
    },
    {
        id:5,
        imgs:lomitoensalsa,
        titulo:'LOMITO EN SALSA',
        precio:'$36.900'
    },

])
//ESTADO DEL CARRITO



    const [cart, setCart] = useState([])
    const {categoria}= useParams() 
    console.log(categoria)
	return (
		<div className="container-fluid overflow-hidden fondoproductos">
            <NavBarCarrito />
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12 letraproductos text-center">
                    <h1>{categoria}</h1>
                </div>
            </div>
            <div className="container overflow-hidden">
                <div className="row cajasmenu">
                    {
                        arreglores.map(rescat=>(
                            <div className="col-12 col-md-6 col-lg-4" key={rescat.id}>
                                <CardRes 
                                imagenes={rescat.imgs} 
                                title={rescat.titulo} 
                                price={rescat.precio}
                                cart={cart}
                                setCart={setCart}
                                arreglores={arreglores}
                                />
                            </div>
                    ))
                    }
                    
                </div>
            </div>

                      
		</div>


		);
} 
export default Res;