import { useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { moveContext } from "../context/store";
import { Spinner } from "react-bootstrap";
export default function Home() {
  let {
    trendingMoves,
    trendingPeople,
    trendingTv,
    setTrendingMovies,
    getTrending,
    spinner,
  } = useContext(moveContext);
  return (
    <>
      {spinner ? (
        ""
      ) : (
        <div className="loading">
          <i className="fa-solid fa-spinner fa-spin fa-10x"></i>
        </div>
      )}
      <div className="container mb-5">
        <div className="row pt-5">
          <div className="col-md-12  mb-3">
            <div className=" text-reset ">
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
            <div key={i} className="col-md-4 col-lg-2 col-6 text-reset ">
              <div className="move text-reset ">
                <Link
                  className="text-reset "
                  to={`/details/${move.id}/movie`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <img
                    className="w-100 rounded"
                    src={"https://image.tmdb.org/t/p/w500" + move.poster_path}
                    alt=""
                  />
                  <h3 className="h6 text-center text-reset  mt-2 fw-bold ">
                    {move.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-md-12  mb-3 d-flex justify-content-start  align-items-center border-strip">
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

          {trendingTv.slice(0, 18).map((move, i) => (
            <div key={i} className="col-md-4 col-lg-2 col-6">
              <div className="move">
                <Link
                  className="text-reset "
                  to={`/details/${move.id}/tv`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <img
                    className="w-100 rounded"
                    src={"https://image.tmdb.org/t/p/w500" + move.poster_path}
                    alt=""
                  />
                  <h3 className="h6 text-center mt-2 text-reset  fw-bold">
                    {move.name}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
