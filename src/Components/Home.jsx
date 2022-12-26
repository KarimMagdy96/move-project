import { useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { moveContext } from "../context/store";
export default function Home() {
  // search data

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

  let {
    trendingMoves,
    trendingPeople,
    trendingTv,
    setTrendingMovies,
    getTrending,
  } = useContext(moveContext);
  return (
    <>
      <div className="container">
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

          {trendingMoves.slice(0, 18).map((move, i) => (
            <div key={i} className="col-md-2">
              <div className="move">
                <Link to={`/details/${move.id}/movie`}>
                  <img
                    className="w-100 rounded"
                    src={"https://image.tmdb.org/t/p/w500" + move.poster_path}
                    alt=""
                  />
                  <h3 className="h6 text-center mt-2 fw-bold text-dark">
                    {move.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-md-6  mb-3 d-flex justify-content-start  align-items-center border-strip">
            <div className="">
              <h1 className=" fw-bold ">Latest And Greatest Tv Shows</h1>
              <span className="h1 fw-bold ">
                Enjoy The Biggest{" "}
                <span className=" fw-bold text-danger">Library </span>
                Ever
              </span>
              <div className="h1 fw-bold">
                Only on <span className="text-danger fw-bold">KFLIX</span>
              </div>
              <div className="text-secondary">
                Most Watched TvShows And More.
              </div>
            </div>
          </div>
          {trendingTv.slice(0, 15).map((move, i) => (
            <div key={i} className="col-md-2">
              <div className="move">
                <Link to={`/details/${move.id}/tv`}>
                  <img
                    className="w-100 rounded"
                    src={"https://image.tmdb.org/t/p/w500" + move.poster_path}
                    alt=""
                  />
                  <h3 className="h6 text-center mt-2 fw-bold">{move.name}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-md-6  mb-3 d-flex justify-content-start  align-items-center border-strip">
            <div className="">
              <h1 className=" fw-bold ">OUR TOP PERFORMERS</h1>
              <span className="h1 fw-bold ">FOR THIS MONTH </span>
              <div className="h1 fw-bold">
                ON <span className="text-danger fw-bold">KFLIX</span>
              </div>
              <div className="text-secondary">
                Most Watched TvShows And More.
              </div>
            </div>
          </div>
          {trendingPeople.slice(3, 6).map((move, i) => (
            <div key={i} className="col-md-2">
              <div className="move">
                {move.profile_path == null ? (
                  ""
                ) : (
                  <>
                    <img
                      className="w-100 rounded"
                      src={
                        "https://image.tmdb.org/t/p/w500" + move.profile_path
                      }
                      alt=""
                    />
                    <h3 className="h6 text-center mt-2 fw-bold">{move.name}</h3>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
