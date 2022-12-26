import React from "react";

export default function Footer() {
  return (
    <footer className=" bottom-0 end-0 start-0  mt-5 p-3 bg-light mt-auto bg-black ">
      <div className="container text-white">
        <div className="col-12 mt-3 mb-2 text-center">
          <i className="fab me-2 fa-facebook"></i>
          <i className="fab mx-2 fa-twitter"></i>
          <i className="fab mx-2 fa-instagram"></i>
          <i className="fab mx-2 fa-spotify"></i>
          <i className="fab mx-2 fa-soundcloud"></i>
        </div>
        <div className="text-center">
          made with <span className="text-danger">❤</span> by karim
        </div>
      </div>
    </footer>
  );
}
