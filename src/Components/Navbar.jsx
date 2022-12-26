import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { moveContext } from "../context/store";
export default function Navbar({ userdata, logOut }) {
  let { search } = useContext(moveContext);

  return (
    <>
      <nav className="navbar  shadow  navbar-expand-lg  rounded">
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
            <i className="fa-solid fa-bars-staggered border-0"></i>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 fw-bold links-cont">
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
            {userdata ? (
              <>
                <div className="input-group  w-50">
                  <input
                    //---------------------------****
                    onChange={search}
                    type="search"
                    className="form-control   rounded-pill bg-transparent "
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="Search Your Favorite Show"
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <ul className="navbar-nav  d-flex mb-2 mb-lg-0 ">
              {userdata ? (
                <li className="dropdown d-flex align-items-center">
                  <div className="dropdown-content">
                    <div
                      onClick={() => logOut()}
                      className="nav-link logout btn fw-bold px-3 login me-2 btn-outline-danger rounded-pill mb-2 mb-lg-0 border border-3 border-danger"
                      aria-current="page"
                    >
                      Logout
                    </div>
                  </div>

                  <button className="rounded-circle border-0 dropbtn login-name bg-light text-danger fw-bold">
                    {localStorage.getItem("user")[1].toUpperCase()}
                  </button>
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
