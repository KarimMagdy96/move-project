import { createContext } from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export let moveContext = createContext(0);
export default function MoviesContextProvider(props) {
  const [trendingMoves, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

  // get all data from api
  async function getTrending(mediaType, callback, pageLink, page) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=fd3c31e2d7a54303dc08756b66824aef${pageLink}${page}`
    );
    console.log(data.results);
    callback(data.results);
  }

  useEffect(() => {
    getTrending("movie", setTrendingMovies, "", "");
    getTrending("tv", setTrendingTv, "", "");
    getTrending("person", setTrendingPeople, "", "");
  }, []);

  function search(e) {
    if (e.target.value != "") {
      let searchTerm = e.target.value;
      let myMovies = [...trendingMoves];
      let results = myMovies.filter((move) =>
        move.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTrendingMovies(results);
    } else {
      getTrending("movie", setTrendingMovies, "", "");
    }
  }
  return (
    <moveContext.Provider
      value={{
        trendingMoves,
        trendingTv,
        trendingPeople,
        setTrendingMovies,
        getTrending,
        setTrendingTv,
        search,
      }}
    >
      {props.children}
    </moveContext.Provider>
  );
}
