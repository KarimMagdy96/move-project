import React from 'react'

export default function People() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12  text-center p-4 fw-bold fs-3">
            OUR TOP PERFORMERS
          </div>

          {JSON.parse(localStorage.getItem("person")).map((move, i) => (
            <div key={i} className="col-md-2">
              <div className="move">
                {move.profile_path == null ? (
                  <>
                    <img
                      className="w-100 rounded"
                      src={
                        "https://image.tmdb.org/t/p/w500/vZ2FW6L8mErV81jO7DaeJ6blVTS.jpg"
                      }
                      alt=""
                    />
                    <h3 className="h6 text-center mt-2 fw-bold">{move.name}</h3>
                  </>
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
