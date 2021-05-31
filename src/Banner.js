import React, { useState, useEffect } from 'react';

import axios from './axios';
import requests from './requests';
import './Banner.css';


function Banner() {
    

        
        const [movie,setMovie] = useState([]);
    
    useEffect(() => {
      
        async function fetchData() {
            const request_Banner = await axios.get(requests.fetchtoprated);
           
            setMovie(request_Banner.data.results[ Math.floor(Math.random() * request_Banner.data.results.length-1)]);

            return request_Banner;
            }
           fetchData()
    }, [])

    function truncate(source, n) {
        return source?.length > n ? source.substr(0, n - 1) + "…" : source;
      }
      

    return (
        <header className="Banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}" )`,
                backgroundPosition:'center center'

         }}
        >
            <div className="Banner_content">

                <h1 className="Banner_title" style={{backgroundColor:"transparent"}}>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="Banner_buttons">

                    <button className="Banner_button" >Play</button>
                    <button className="Banner_button" >My list</button>

                </div>

                <h2 className="Banner_discription" >
  
                    {truncate(movie?.overview ,150)}
                  

                </h2>

            </div>
            <div className="Banner_fade_bottom"/>
        </header>
    )
}

export default Banner
