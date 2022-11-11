import React from 'react'

export default function Footer() {
  return (
    <footer className=" container p-3 bg-light">
      <div className="row">
        <div className="col-6 col-md-3">
          <div className=" layer">
            <div className=" h4">
              <span className="h3 fw-bold text-danger">KFLIX</span>
            </div>
            <div className="mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Eligendi, temporibus dignissimos? A dolorum consequatur eius.
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className=" layer">
            <div className=" h3 fw-bold text-danger">Contact Me</div>
            <ul className="p-0 list">
              <li className="">
                <i className="fa-solid fa-paper-plane text-danger"></i>
                <a href="mailto:karimmagdy096@gmail.com">
                  {" "}
                  karimmagdy096
                </a>
              </li>
              <li>
                <a
                  className="text-primary"
                  href="https://www.linkedin.com/in/karimagdy14/"
                >
                  {" "}
                  <i className="fab fa-linkedin"></i>{" "}
                  <span className="text-dark">karimagdy14</span>
                </a>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp text-success"></i> 01097220712
              </li>
              <li>
                <a href="https://github.com/KarimMagdy96">
                  <i className="fa-brands fa-github"></i>
                  <span> KarimMagdy96</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className=" layer">
            <div className=" h4">
              <span className="h3 fw-bold text-danger">About Me</span>
            </div>
            <div className="">
              Creative Front-End Developer offering 1 year of experience
              providing high-impact web solutions for diverse industry
              organizations. Skilled in designing, developing, and testing
              multiple web-based applications incorporating a range of
              technologies. Aspiring to combine broad background with strong
              technical skills to excel as a Front-End Developer.
            </div>
          </div>
        </div>

        <div className="col-12 mt-3 mb-4 text-center">
          <i className="fab me-2 fa-facebook"></i>
          <i className="fab mx-2 fa-twitter"></i>
          <i className="fab mx-2 fa-instagram"></i>
          <i className="fab mx-2 fa-spotify"></i>
          <i className="fab mx-2 fa-soundcloud"></i>
        </div>
      </div>
    </footer>
  );
}
