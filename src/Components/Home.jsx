import axios from 'axios'
import React, { useState } from 'react'

export default function Home() {
  const [trendingMoves, setTrendingMovies] = useState([])
  const [trendingTv, setTrendingTv] = useState([])
  const [trendingPeople, setTrendingPeople] = useState([])

 async function getTrending(mediaType,callback){
   let { data } = await axios.get(
     `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=fd3c31e2d7a54303dc08756b66824aef`
   );
    callback(data.results)
  }
  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPeople);
  }, [])
  
  return (
    <div>Home</div>
  )
}
