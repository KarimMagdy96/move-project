import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [trendingMoves, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

  async function getTrending(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=fd3c31e2d7a54303dc08756b66824aef`
    );
    callback(data.results.slice(0,15));
  }
  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPeople);
  }, []);
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-6  mb-3 d-flex justify-content-start  align-items-center border-strip">
          <div className="">
            <h1 className=" fw-bold "> TOP Treading Movies To Watch</h1>
            <span className="h1 fw-bold ">
              Enjoy more than{" "}
              <span className=" fw-bold text-danger">100+ </span>
              movie
            </span>
            <div className="h1 fw-bold">
              Only on <span className="text-danger fw-bold">KFLIX</span>
            </div>
            <div className="text-secondary">
              Most Watched Movies, TvShows Every Day And More.
            </div>
          </div>
        </div>
        {trendingMoves.map((move, i) => (
          <div key={i} className="col-md-2">
            <div className="move">
              <img
                className="w-100 rounded"
                src={"https://image.tmdb.org/t/p/w500" + move.poster_path}
                alt=""
              />
              <h3 className="h6">{move.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-5">
        <div className="col-md-6  mb-3 d-flex justify-content-start  align-items-center border-strip">
          <div className="">
            <h1 className=" fw-bold ">Latest And Greatest Tv Shows</h1>
            <span className="h1 fw-bold ">
              Enjoy more than{" "}
              <span className=" fw-bold text-danger">100+ </span>
              movie
            </span>
            <div className="h1 fw-bold">
              Only on <span className="text-danger fw-bold">KFLIX</span>
            </div>
            <div className="text-secondary">
              Most Watched Movies, TvShows Every Day And More.
            </div>
          </div>
        </div>
        {trendingTv.map((move, i) => (
          <div key={i} className="col-md-2">
            <div className="move">
              <img
                className="w-100 rounded"
                src={"https://image.tmdb.org/t/p/w500" + move.poster_path}
                alt=""
              />
              <h3 className="h6">{move.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
