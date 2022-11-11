import React, { useEffect, useState } from "react";
export default function Move() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12  text-center p-4 fw-bold fs-3">
            Top Treading Tv SHOWS
          </div>

          {JSON.parse(localStorage.getItem("movies")).map((move, i) => (
            <div key={i} className="col-md-3">
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
      </div>
    </>
  );
}
