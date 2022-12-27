import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { moveContext } from "../context/store";
export default function Move() {
  let [page, setpage] = useState(1);
  let { getTrending, trendingMoves, setTrendingMovies } =
    useContext(moveContext);

  useEffect(() => {
    getTrending(
      "movie",
      setTrendingMovies,
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",
      page
    );
  }, []);
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
            <div className="w-100 text-center fw-bold h1 text-danger mb-5 pt-5">
              UNLIMITED TV SHOWS & MOVIES
            </div>
            {trendingMoves.map((move, i) => (
              <div key={i} className="col-md-2 col-6">
                <div className="move">
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
                    <h3 className="h6 text-center mt-2 text-reset  fw-bold ">
                      {move.title}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <nav aria-label="Page navigation example ">
            <ul className="pagination  d-flex justify-content-center">
              <li
                className="page-item user-select-none"
                onClick={() => {
                  page === 0
                    ? setpage(() => (page = 1))
                    : setpage(() => page--);
                  console.log(page);
                  getTrending(
                    "movie",
                    setTrendingMovies,
                    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",
                    page
                  );
                }}
              >
                {page <= 1 ? (
                  <a className="page-link text-muted">Previous</a>
                ) : (
                  <a className="page-link text-danger">Previous</a>
                )}
              </li>

              <li
                className="page-item user-select-none"
                onClick={() => {
                  console.log(page);

                  setpage(2);
                  getTrending(
                    "movie",
                    setTrendingMovies,
                    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",
                    page
                  );
                }}
              >
                <a className="page-link text-danger">2</a>
              </li>
              <li
                className="page-item user-select-none"
                onClick={() => {
                  console.log(page);

                  setpage(3);

                  getTrending(
                    "movie",
                    setTrendingMovies,
                    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",
                    page
                  );
                }}
              >
                <a className="page-link text-danger">3</a>
              </li>
              <li
                className="page-item user-select-none"
                onClick={() => {
                  console.log(page);

                  setpage(4);
                  getTrending(
                    "movie",
                    setTrendingMovies,
                    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",
                    page
                  );
                }}
              >
                <a className="page-link text-danger">4</a>
              </li>
              <li
                className="page-item user-select-none"
                onClick={() => {
                  console.log(page);

                  setpage(() => page++);
                  getTrending(
                    "movie",
                    setTrendingMovies,
                    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",
                    page
                  );
                }}
              >
                <a className="page-link text-danger">Next</a>
              </li>
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
