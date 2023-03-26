import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.css"

const LandingPage = ()=>{
    return(
    <div className={s.landingBody}>
        <div className={s.landingTitle}>
            <h1>Countries</h1>
        </div>
            <h2>Learn something else about our world</h2>
            <h3>Capitals, Activities, Population, Areas... </h3>
        <Link to='/home'>
            <button className={s.button} >Home</button>
        </Link>
    </div>
    
    )
}

export default LandingPage;