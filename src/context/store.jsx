import { createContext } from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export let moveContext = createContext(0);
export default function MoviesContextProvider(props) {
  const [trendingMoves, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);
  const [spinner, setSpinner] = useState(false);

  // get all data from api
  async function getTrending(mediaType, callback, pageLink, page) {
    setSpinner(true);
    let { data } = await axios
      .get(
        `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=fd3c31e2d7a54303dc08756b66824aef${pageLink}${page}`
      )
      .then(setSpinner(true));
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
      let mytv = [...trendingTv];
      let moveResults = myMovies.filter((move) =>
        move.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      let tvResults = mytv.filter((tv) =>
        tv.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTrendingMovies(moveResults);
      setTrendingTv(tvResults);
    } else {
      getTrending("movie", setTrendingMovies, "", "");
      getTrending("tv", setTrendingTv, "", "");
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
        spinner,
      }}
    >
      {props.children}
    </moveContext.Provider>
  );
}
/**
 * 1 creatfle called context inside of it make store.jsx
 * 1- let hamda = creat conteact 0
 * 2finction hamdaprovider(props){
 *
 * reuturn(
 * <hama.provider **value={
 * //all shed data i want to send to another components
 * }>
 *
 * {props.children}
 * </hama.provider>
 *
 * )
 * }
 * 3- app.jsx  import hamadaprovider the rap all pages inside
 *
 * 4- any component use conrtest
 * let {disctracting any value in **value} = use contect(name of creat conteact in the store hamda)
 *
 *
 *
 *  */
/*
redux
1-npm i reduxjs/toolkit reactderacs
2-ui-component -> action->dispatcher->
*/
