import React from "react";
import { Link } from "react-router-dom";
import logo from ".//logo.png";

function Navigation() {
    return ( 
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-zinc-950 text-zinc-400">
            <img className='w-[80px] h-6' src={logo} alt="logo"/>

            <span>
                <Link to="/dbMovie" className="mr-2">Home</Link>
                <Link to="/dbMovie/favourites">Favourites</Link>
            </span>
        </nav>
    )
}

export default Navigation