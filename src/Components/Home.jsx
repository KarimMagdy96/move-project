import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [trendingMoves, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

  async function getTrending(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=fd3c31e2d7a54303dc08756b66824aef`
    );
    callback(data.results.slice(0, 15));
  }
  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPeople);
  }, []);
  return (
    <>
      <div className="hero d-none d-md-block">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item active position-relative"
              data-bs-interval="50"
            >
              <img
                src="../../public/poster4.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="position-absolute des  w-auto">
                <img
                  src="../../public/logo1.png"
                  className="w-25 cte mb-3"
                  alt=""
                />
                <div className="h3 fw-bold cte">Peaky Blinders</div>
                <p className="w-50 mt-3 cte">
                  Best friends Sophie and Agatha find their bond put to the test
                  when they're whisked away to a magical school for future
                  fairy-tale heroes and villains.
                </p>
                <p className="mt-3 cte">
                  Starring:Cillian Murphy, Sam Neill, Helen McCrory
                </p>
                <p className="cte">Creators:Steven Knight</p>
              </div>
            </div>
            <div class="carousel-item " data-bs-interval="50">
              <img
                src="../../public/poster5.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="position-absolute des  w-auto">
                <img
                  src="../../public/logo2.png"
                  className="w-25 cte mb-3"
                  alt=""
                />
                <div className="h3 fw-bold cte">Peaky Blinders</div>
                <p className="w-50 mt-3 cte">
                  Best friends Sophie and Agatha find their bond put to the test
                  when they're whisked away to a magical school for future
                  fairy-tale heroes and villains.
                </p>
                <p className="mt-3 cte">
                  Starring:Cillian Murphy, Sam Neill, Helen McCrory
                </p>
                <p className="cte">Creators:Steven Knight</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="50">
              <img
                src="../../public/poster6.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="position-absolute des  w-auto">
                <img
                  src="../../public/logo3.png"
                  className="w-25 cte mb-3"
                  alt=""
                />
                <div className="h3 fw-bold cte">Stranger Things</div>
                <p className="w-50 mt-3 cte">
                  Best friends Sophie and Agatha find their bond put to the test
                  when they're whisked away to a magical school for future
                  fairy-tale heroes and villains.
                </p>
                <p className="mt-3 cte">
                  Starring:Cillian Murphy, Sam Neill, Helen McCrory
                </p>
                <p className="cte">Creators:Steven Knight</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
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
          {trendingMoves.map((move, i) => (
            <div key={i} className="col-md-2">
              <div className="move">
                <Link to="details">
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
          {trendingTv.map((move, i) => (
            <div key={i} className="col-md-2">
              <div className="move">
                <img
                  className="w-100 rounded"
                  src={"https://image.tmdb.org/t/p/w500" + move.poster_path}
                  alt=""
                />
                <h3 className="h6 text-center mt-2 fw-bold">{move.name}</h3>
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
          {trendingPeople.map((move, i) => (
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
