import React from 'react'

export default function About() {
  return (
    <>
      <div className="card mb-3 w-75 m-auto my-5 d-none d-md-block">
        <div className="row">
          <div className="col-4">
            <img
              src="../../public/profile.jpg "
              className="w-100  rounded-start"
              alt="..."
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title fw-bold text-danger">About Me</h5>
              <p className="card-text">
                Creative Front-End Developer offering 1 year of experience
                providing high-impact web solutions for diverse industry
                organizations. Skilled in designing, developing, and testing
                multiple web-based applications incorporating a range of
                technologies. Aspiring to combine broad background with strong
                technical skills to excel as a Front-End Developer.
              </p>
              <p className="card-text">
                <div className="col-12 mt-3 mb-4 text-center">
                  <a
                    href="https://www.facebook.com/karimagdy14"
                    target="_blank"
                  >
                    <i className="fab me-2 fa-facebook"></i>
                  </a>
                  <i className="fab mx-2 fa-twitter"></i>
                  <i className="fab mx-2 fa-instagram"></i>
                  <i className="fab mx-2 fa-spotify"></i>
                  <i className="fab mx-2 fa-soundcloud"></i>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card d-block d-md-none m-auto w-75 my-5">
        <img
          src="../../public/profile.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            Creative Front-End Developer offering 1 year of experience providing
            high-impact web solutions for diverse industry organizations.
            Skilled in designing, developing, and testing multiple web-based
            applications incorporating a range of technologies. Aspiring to
            combine broad background with strong technical skills to excel as a
            Front-End Developer.
          </p>
          <div className="col-12 mt-3 mb-4 text-center">
            <a href="https://www.facebook.com/karimagdy14" target="_blank">
              <i className="fab me-2 fa-facebook"></i>
            </a>
            <i className="fab mx-2 fa-twitter"></i>
            <i className="fab mx-2 fa-instagram"></i>
            <i className="fab mx-2 fa-spotify"></i>
            <i className="fab mx-2 fa-soundcloud"></i>
          </div>
        </div>
      </div>
    </>
  );
}
