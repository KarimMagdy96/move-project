import React from "react";
import { Link } from "react-router-dom";
export default function Navbar({ userdata, logOut }) {
  return (
    <>
      <nav className="navbar shadow  navbar-expand-lg navbar-white ">
        <div className="container-fluid">
          <a className="navbar-brand brand" href="#">
            K
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars-staggered border-0"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold links-cont ">
              {userdata ? (
                <>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active "
                      aria-current="page"
                      to="home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="tv"
                    >
                      TV Shows
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="people"
                    >
                      People
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="move"
                    >
                      Move
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="about"
                    >
                      about
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="contacts"
                    >
                      Contacts
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav d-flex mb-2 mb-lg-0 ">
              <li className="nav-item d-flex order-last order-lg-first align-items-center text-secondary  justify-content-center">
                <i className="fab me-2 fa-facebook"></i>
                <i className="fab mx-2 fa-twitter"></i>
                <i className="fab mx-2 fa-instagram"></i>
                <i className="fab mx-2 fa-spotify"></i>
                <i className="fab mx-2 fa-soundcloud"></i>
              </li>    
              {userdata ? (
                <li className="nav-item">
                  <span
                    onClick={() => logOut()}
                    className="nav-link btn fw-bold px-3 login me-2 btn-outline-danger rounded-pill mb-2 mb-lg-0 border border-3 border-danger"
                    aria-current="page"
                  >
                    Logout
                  </span>
                </li>
                
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn fw-bold px-3 login me-2 btn-outline-danger rounded-pill mb-3 mb-lg-0 border border-3 border-danger"
                      aria-current="page"
                      to="login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active fw-bold px-3 btn text-white btn-outline-danger rounded-pill mb-3 mb-lg-0"
                      aria-current="page"
                      to="register"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
