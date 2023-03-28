import {React, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetail } from "../../Redux/actions";

import s from "./CountryDetail.module.css"
import logo from "../Imagenes/logo.png"

export default function CountryDetail(props) {
    const dispatch = useDispatch()
    const id = props.match.params.id
    const country = useSelector((state) => state.detail)
    const history = useHistory()
    
    useEffect(() => {
        dispatch(getCountriesDetail(id))
    },[dispatch, id])

    function handleClick(e){
        e.preventDefault();
        history.push("/home")
        
    }

    return (
        
        <div className={s.prindiv}>

            <div className={s.bar}>
            <Link to= "/home"><img className={s.bothome} onClick={(e) => handleClick(e)} src={logo} alt="logo"></img></Link>
            </div>

            <div className={s.cardd}>

                <div className={s.conpais} >
                <h2 className={s.titulod}>Detalles del País</h2>
            {
                country ?
                <div >
                    <img className={s.banderad} src={country.flags} alt="Imagen no disponible" />
                    <h2 className={s.nombred}>{country.name}</h2>
                    <h4 className={s.continented}>{country.continents}</h4>
                    <h4 className={s.codigo}>{country.id}</h4>
                    <h4 className={s.detalle}>Capital: {country.capital}</h4>
                    <h4 className={s.detalle}>Población: {country.population} Hab.</h4>
                </div> : <p>Loading ...</p>
            }
                </div>

            <div className={s.conact}>
            <h3 className={s.titulod}>Actividades del País</h3>
            {
                country.Activities&&country.Activities.length ? 
            country.Activities.map(e => {
                return (
                        <div>
                            <h4 className={s.nombreact}>{e.name}</h4>
                            <p className={s.detalle}>Dificultad: {e.hard}</p>
                            <p className={s.detalle}>Temporada: {e.season}</p>
                        </div>
                        
                    ) 
                 }) 
                 : <p>No existen actividades en este país</p> 
            }
             <Link to="/activities"><button className={s.botactd}>Crear Actividad</button></Link>               
            </div>
            </div>
        </div>
    )
};

