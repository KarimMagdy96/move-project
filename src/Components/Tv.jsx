import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Tv() {
  const [trendingMoves, setTrendingMovies] = useState([]);

  async function getTrending(page) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=fd3c31e2d7a54303dc08756b66824aef&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    setTrendingMovies(data.results);
  }
  useEffect(() => {
    getTrending(1);
  }, []);
  let num = new Array(10).fill(1).map((e, i) => i + 1);
  console.log(num);
  function up() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div className="container">
      {trendingMoves ? (
        <>
          <button
            className=" rounded-50 border-0 bg-transparent "
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            style={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              textAlign: "center",
            }}
          >
            <i className="fa-solid fa-circle-up fa-3x text-danger"></i>
          </button>
          <div className="row mt-5">
            <div className="w-100 text-center fw-bold h1 text-danger mb-5">
              UNLIMITED TV SHOWS
            </div>
            {trendingMoves.map((move, i) => (
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
          <nav aria-label="Page navigation example ">
            <ul className="pagination  d-flex justify-content-center">
              {num.map((e, i) => {
                return (
                  <>
                    <li
                      key={i}
                      className="page-item"
                      onClick={() => getTrending(e)}
                    >
                      <a className="page-link text-danger">{e}</a>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
        </>
      ) : (
        <>
          <div className="w-100 vh-100 bg-danger">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
