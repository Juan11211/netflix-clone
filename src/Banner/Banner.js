import React, {useEffect, useState} from 'react'
import './Banner.css'
import requests from '../Requests'
import axios from '../axios'


function Banner() { 
    
    const [movie, setMovie] = useState([])

    // const Api = 'https://api.themoviedb.org/3'

    // const netflixShows = `/discover/tv`
    
    // const fetchData = async() => {
    //     const data = await axios.get(`${Api}${netflixShows}`, {
    //         params: 'a8d225842e59d3766ab358c78b2670c0'
    //     })
    //     setMovie(data.data.results[
    //         Math.floor(Math.random() * data.data.results.length - 1)
    //         ])  
    //         return data; 
    // }
     
    // useEffect(() => {
    //     fetchData(); 
    // }, [])

    useEffect(() => { 
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
             setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
            return request; 
        }
        fetchData();
    }, [])
    console.log(movie)
    


        // n = # of character // after the string length is over show ...
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }

  return (
   <header 
     className='banner'
     style={{
         backgroundSize: 'cover',
         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
         backgroundPosition: "center center"
    }}>
        <div className='banner--context'>
            <h1 className='banner--title'>{movie?.title || movie?.name || movie?.original}</h1>
            <div className='banner--buttons'>
                <button className='banner--button'>Play</button>
                <button className='banner--button'>My List</button>
            </div>
            <h1 className='banner--desc'>
                {truncate(movie?.overview, 100)}
            </h1>
        </div>

    <div className='banner--fade' />
      

   </header>
  )
}

export default Banner