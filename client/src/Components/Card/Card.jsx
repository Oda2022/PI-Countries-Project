import React from "react";
import { Link } from "react-router-dom";

import s from "./Card.module.css"

export default function Card({flags, name, continents, id}) {
    return (
        <div className={s.card}>
            <div><img className={s.bandera} src={flags} alt="Imagen no disponible" /></div>
            <h3 className={s.titulo}>{name}</h3>
            <h5 className={s.continente}>{continents}</h5>
            
            <Link to={`/countries/${id}`}><button className={s.boton}>Ver Más</button></Link>
                        
        </div>
    );
}