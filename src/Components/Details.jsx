import axios from "axios";
import { func } from "joi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Details() {
  let prams = useParams();
  console.log(prams);
  const [movieDetails, setMovieDetails] = useState(null);
  let [sameshows, setsameshows] = useState([]);

  async function getmoviesDetails(id, category) {
    let { data } = await axios.get(`
https://api.themoviedb.org/3/${category}/${id}?api_key=fd3c31e2d7a54303dc08756b66824aef`);
    let samilerShows = await axios.get(
      `https://api.themoviedb.org/3/${category}/${id}/similar?api_key=fd3c31e2d7a54303dc08756b66824aef&language=en-US&page=1`
    );
    setMovieDetails(data);
    setsameshows(samilerShows.data.results);
  }
  useEffect(() => {
    getmoviesDetails(prams.id, prams.category);
  }, []);

  return (
    <div className=" container py-5">
      {movieDetails ? (
        <div className="row">
          <div className="col-md-3">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path}
              alt=""
              className="w-100 rounded"
            />
          </div>
          <div className="col-md-9">
            <div className="container">
              <h2 className=" fw-bold h1 text-danger text-center">
                {movieDetails.title ? movieDetails.title : movieDetails.name}
              </h2>
              <h5 className=" text-muted text-center">
                {movieDetails.tagline}
              </h5>

              <div className="fw-bold text-danger d-flex  justify-content-center  my-3  text-center">
                <span className="me-5">
                  {" "}
                  Vote:{movieDetails.vote_average}/10
                </span>

                <span className=" fw-bold text-danger">
                  Release Date:
                  {movieDetails.release_date
                    ? movieDetails.release_date
                    : movieDetails.first_air_date}
                </span>
              </div>
              <div className="d-flex mt-4  justify-content-around">
                {movieDetails.genres.map((e, i) => {
                  return (
                    <div className=" text-danger fw-bold">
                      <i className="fa-solid fa-film"></i> {e.name}
                    </div>
                  );
                })}
              </div>
              <div className="h3 mt-4">Overview</div>
              <p className="  py-2">{movieDetails.overview}</p>
              <ul>
                <li>
                  <a
                    className="btn btn-danger py-3 my-3 fw-bold"
                    href={movieDetails.homepage}
                    target="_blank"
                  >
                    Watch It Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 h1 text-center mb-4 fw-bold text-danger">
                You might also like
              </div>
              {sameshows.slice(0, 12).map((show, i) => {
                return (
                  <div className="col-md-2 col-6" key={i}>
                    <div className="show">
                      {prams.category === "movie" ? (
                        <>
                          <Link to={`/details/${show.id}/movie`}>
                            <img
                              className="w-100 rounded"
                              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                              alt=""
                            />
                            <h3 className="h6 text-center mt-2 fw-bold">
                              {show.name ? show.name : show.title}
                            </h3>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to={`/details/${show.id}/tv`}>
                            <img
                              className="w-100 rounded"
                              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                              alt=""
                            />
                            <h3 className="h6 text-center mt-2 fw-bold">
                              {show.name ? show.name : show.title}
                            </h3>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="row" aria-hidden="true">
          <div className="col-md-3">
            <img
              src={"https://via.placeholder.com/306x459.png?text=KFLEX"}
              alt=""
              className="w-100 rounded"
            />
          </div>
          <div className="col-md-9">
            <h2 className=" placeholder-glow">
              <span className="placeholder col-6"></span>
            </h2>
            <p className="placeholder-glow">
              <span className="d-block mt-3 placeholder col-7"></span>
              <span className="placeholder col-4"></span>
            </p>
            <ul>
              <li>
                <span className=" placeholder-glow">
                  <span className="placeholder col-3"></span>
                </span>
                :{" "}
              </li>
              <li className=" ">
                {" "}
                <span className="fw-bold text-danger"></span>
              </li>
              <li>
                <span className="fw-bold text-danger">Keywords: </span>
              </li>
              <li>
                <a className="btn btn-danger py-3 my-3 fw-bold" target="_blank">
                  Watch It Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
