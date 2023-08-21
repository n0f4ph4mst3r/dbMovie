import React from "react";
import { Link } from "react-router-dom";
import logo from ".//logo.png";

function Footer() {
    return (
        <footer className='bg-stone-950 bottom-0 text-zinc-400'>
            <div className="p-11 flex flex-wrap">
                <img className='w-[102px] h-10 mr-5' src={logo} alt="logo" />
                <Link to="https://www.themoviedb.org/" target="_blank">
                    <img className='w-20 h-10 mr-10' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' />
                </Link>
                <div>
                    Developed by <a href="https://github.com/n0f4ph4mst3r" className="text-purple-600" target="_blank">Korshunov Vladislav</a>
                    <div>
                        This project uses the <a href="https://developer.themoviedb.org/docs/faq" className="text-purple-600" target="_blank">TMDB API</a> but is not endorsed or certified by TMDB.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer