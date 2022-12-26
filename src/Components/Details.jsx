import axios from "axios";
import { func } from "joi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  let prams = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  async function getmoviesDetails(id, category) {
    let { data } = await axios.get(`
https://api.themoviedb.org/3/${category}/${id}?api_key=fd3c31e2d7a54303dc08756b66824aef`);
    setMovieDetails(data);
    console.log();
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
            <h2 className=" fw-bold text-danger">{movieDetails.title}</h2>
            <p className=" text-muted py-3">{movieDetails.overview}</p>
            <ul>
              <li>
                <span className=" fw-bold text-danger">Release Date</span>:{" "}
                {movieDetails.release_date}
              </li>
              <li className=" ">
                {" "}
                <span className="fw-bold text-danger">Vote: </span>
                {movieDetails.vote_average}/10
              </li>
              <li>
                <span className="fw-bold text-danger">Keywords: </span>
                {movieDetails.tagline}
              </li>
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
      ) : (
        <div className="row" aria-hidden="true">
          <div className="col-md-3">
            <img
              src='{"../img/306x459.png"}'
              alt="lorem"
              className="w-100 rounded"
            />
          </div>
          <div className="col-md-9">
            <h2 className=" placeholder-glow">
              <span className="placeholder col-6" />
            </h2>
            <p className="placeholder-glow">
              <span className="d-block mt-3 placeholder col-7" />
              <span className="placeholder col-4" />
            </p>
            <ul>
              <li>
                <span className=" placeholder-glow">
                  <span className="placeholder col-4" />
                </span>
                :{"{"}" "{"}"}
              </li>
              <li className=" ">
                {"{"}" "{"}"}
                <span className="placeholder-glow">
                  <span className="placeholder col-3" />
                </span>
              </li>
              <li>
                <span className="placeholder-glow">
                  <span className="placeholder col-2" />
                </span>
              </li>
              <li />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
