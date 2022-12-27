import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { moveContext } from "../context/store";
export default function Navbar({ userdata, logOut }) {
  let { search } = useContext(moveContext);
  const [close, setClose] = useState(false);
  return (
    <>
      <nav className="navbar  shadow text-reset  navbar-expand-lg  rounded">
        <div className="container-fluid d-flex text-reset ">
          <a className="navbar-brand text-reset   brand " href="#">
            K
          </a>

          <div
            className=" w-100 collaps-items  text-reset  d-flex justify-content-between align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-reset  d-none d-xxl-flex mb-2 mb-lg-0 fw-bold links-cont">
              {userdata ? (
                <>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active text-reset  "
                      aria-current="page"
                      to="home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-reset  active"
                      aria-current="page"
                      to="tv"
                    >
                      TV Shows
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link text-reset  active"
                      aria-current="page"
                      to="move"
                    >
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item"></li>
                  <li className="nav-item"></li>
                </>
              ) : (
                ""
              )}
            </ul>
            {userdata ? (
              <>
                <div className="input-group px-3 nav-input w-75 ">
                  <input
                    //---------------------------****
                    onChange={search}
                    type="search"
                    className="form-control w-100 px-5 text-reset    rounded-pill search "
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="Search"
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <ul className="navbar-nav text-reset  d-none d-xxl-flex mb-2 mb-lg-0 ">
              {userdata ? (
                <li className="dropdown d-flex align-items-center">
                  <div className="dropdown-content">
                    <div
                      onClick={() => logOut()}
                      className="nav-link logout btn text-reset  fw-bold px-3 login me-2 btn-outline-danger rounded-pill mb-2 mb-lg-0 border border-3 border-danger"
                      aria-current="page"
                    >
                      Logout
                    </div>
                  </div>

                  <button className="rounded-circle border-0 dropbtn login-name bg-light text-danger fw-bold">
                    {localStorage.getItem("user")
                      ? localStorage.getItem("user")[1].toUpperCase()
                      : "K"}
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn text-reset  fw-bold px-3 login me-2 btn-outline-danger rounded-pill mb-3 mb-lg-0 border border-3 border-danger"
                      aria-current="page"
                      to="login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-reset  active fw-bold px-3 btn text-white btn-outline-danger rounded-pill mb-3 mb-lg-0"
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
          <button
            className="d-xxl-none nav-collaps border-0 bg-transparent"
            onClick={() => setClose(!close)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
      {close ? (
        <div className="collaps" onClick={() => setClose(!close)}>
          <div className="d-flex justify-content-between align-items-center">
            <button className="rounded-circle border-0 dropbtn login-name bg-light text-danger fw-bold me-auto m-3">
              {localStorage.getItem("user")
                ? localStorage.getItem("user")[1].toUpperCase()
                : "K"}
            </button>
            <button
              onClick={() => setClose(!close)}
              className=" bg-transparent border-0 m-3"
            >
              <i className="fa-solid text-reset  fa-xmark fs-5 "></i>
            </button>
          </div>
          <ul className=" d-flex flex-column  w-100  p-0 justify-content-center align-items-center">
            <li className=" w-100 text-center  p-2 fw-bold">
              <Link
                className="nav-link active text-reset "
                aria-current="page"
                to="home"
              >
                Home
              </Link>
            </li>
            <li className="w-100 text-center  p-2 fw-bold">
              <Link
                className="nav-link active text-reset "
                aria-current="page"
                to="tv"
              >
                TV Shows
              </Link>
            </li>
            <li className="w-100 text-center  p-2 fw-bold">
              <Link
                className="nav-link active text-reset "
                aria-current="page"
                to="move"
              >
                Movies
              </Link>
            </li>
          </ul>
          <button
            onClick={() => logOut()}
            className="nav-link text-reset  logout btn fw-bold p-1 login me-2 btn-outline-danger rounded-pill mx-2 mb-2 mb-lg-0 border border-3 border-danger"
          >
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
