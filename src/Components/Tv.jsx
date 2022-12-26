import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { moveContext } from "../context/store";
export default function Move() {
  let [page, setpage] = useState(1);
  let { getTrending, trendingTv, setTrendingTv, spinner } =
    useContext(moveContext);

  useEffect(() => {
    getTrending(
      "tv",
      setTrendingTv,
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",
      page
    );
  }, []);

  return (
    <>
      {spinner ? (
        ""
      ) : (
        <div className="loading">
          <i class="fa-solid fa-spinner fa-spin fa-10x"></i>
        </div>
      )}

      <div className="container">
        {trendingTv ? (
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
                UNLIMITED TV SHOWS
              </div>
              {trendingTv.map((tv, i) => (
                <div key={i} className="col-md-2 col-6">
                  <div className="tv">
                    <Link to={`/details/${tv.id}/tv`}>
                      <img
                        className="w-100 rounded"
                        src={"https://image.tmdb.org/t/p/w500" + tv.poster_path}
                        alt=""
                      />
                      <h3 className="h6 text-center mt-2 fw-bold">{tv.name}</h3>
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
                      "tv",
                      setTrendingTv,
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
                      "tv",
                      setTrendingTv,
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
                      "tv",
                      setTrendingTv,
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
                      "tv",
                      setTrendingTv,
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
                      "tv",
                      setTrendingTv,
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
          <></>
        )}
      </div>
    </>
  );
}
