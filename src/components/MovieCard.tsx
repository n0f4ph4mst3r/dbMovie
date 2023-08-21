import React, { useEffect, useState } from 'react'
import { IMovie } from '../models/models'
import { Rating, ThinStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Heart from "react-animated-heart";
import {useActions} from '../hooks/actions';
import {useAppSelector} from '../hooks/redux';

function MovieCard({ movie }: { movie: IMovie }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    const [rating, setRating] = useState(0)

    const rateStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#fdcc0d',
        inactiveFillColor: '#fbf1a9'
    }

    const {addFavourites, removeFavourites} = useActions()
    const {favourites} = useAppSelector(state => state.tmdb)
    const [isFav, setIsFav] = useState(favourites.map(item => item.id).includes(movie.id))

    const addToFavourite = () => {
        addFavourites(movie)
        setIsFav(true)
    }

    const removeFromFavourite = () => {
        removeFavourites(movie.id)
        setIsFav(false)
    }

    return <>
        {
            isLoading
                ?
                <div className="bg-stone-800 relative border-solid border border-neutral-800 rounded-lg m-8 w-[290px] h-[430px] animate-pulse" />
                :
                <div className="bg-stone-800 relative border-solid border border-neutral-800 rounded-lg m-8 max-w-full md:max-w-[40%] xl:max-w-[16%] inline-block transition-transform duration-200 hover:scale-125 z-0 hover:z-50">
                    <div className="absolute top-[-15px] right-[-15px] z-50 cursor-pointer">
                        {
                            isFav
                            ?
                            <Heart isClick={true} onClick={removeFromFavourite} />
                            :
                            <Heart isClick={false} onClick={addToFavourite} />
                        }
                        
                    </div>
                    <img className="object-fill w-full h-fitt rounded-lg" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                    <div className="absolute w-full h-full rounded-lg pt-0 pb-4 px-4 bottom-0 flex flex-col justify-end bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgb(0,0,0,1)] opacity-0 transition-opacity duration-200 hover:opacity-100 text-white ">
                        <div className="font-bold text-lg">{movie ? movie.original_title : ""}</div>
                        <div className="font-medium text-xs">
                            {movie ? movie.release_date : ""}
                            <Rating style={{ maxWidth: 75 }} itemStyles={rateStyles} readOnly value={movie ? movie.vote_average / 2 : 0} />
                        </div>
                        <div className="font-light italic text-xs mb-1 ">{movie ? movie.overview.slice(0, 138) + "..." : ""}</div>
                    </div>
                </div>
        }
    </>
}

export default MovieCard