import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png';


const Navbar  = ({isFullScreen})=>{

    return(
        <div className={`relative ${isFullScreen?"h-0":"h-16"} flex bg-black justify-center items-center gap-4`}>
            <Link to="/"><img className="w-16" src={logo} alt="logo" /></Link>
            <Link to="/"><div className="text-white text-4xl">Code Deck</div></Link>
            
            
        </div>
    )
}

export default Navbar