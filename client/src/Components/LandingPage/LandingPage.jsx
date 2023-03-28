import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"
import landing from "../Imagenes/landing perfect.jpg"

const LandingPage = ()=>{
    return(
        
            <div className={style.homepage}>
            <img className={style.imgLanding} src={landing} alt="Bienvenida" />
            
            <Link to ="/home">
                <button className={style.boton}>Home</button>
            </Link>
            
            </div>
        
    
    )
}

export default LandingPage;