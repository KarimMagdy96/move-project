import React from "react";

export default function Notfound() {
  return (
    <>
      <div className="container  w-100 vh-100">
        <div className="row  text-center vh-100 ">
          <div className="col-md-12">
            <div className="error-template  mt-5">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occurred, Requested page not found!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
