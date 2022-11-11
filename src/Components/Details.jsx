import axios from 'axios';
import { func } from 'joi';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Details() {
  let prams= useParams();
  const [movieDetails, setMovieDetails] = useState(null)

  async function getmoviesDetails(id){
    let { data } =await axios.get(`
https://api.themoviedb.org/3/movie/${id}?api_key=fd3c31e2d7a54303dc08756b66824aef`);
setMovieDetails(data)
  }
  useEffect(() => {
    getmoviesDetails(prams.id);
  
   
  }, [])
  
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
                <span className='fw-bold text-danger'>Keywords: </span>
                {movieDetails.tagline}
              </li>
              <li>
                <a className='btn btn-danger py-3 my-3 fw-bold' href={movieDetails.homepage} target='_blank'>Watch Movie</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
          <i className="fa fa-spinner fa-spin fa-3x"></i>
        </div>
      )}
    </div>
  );
}
