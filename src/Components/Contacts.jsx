import React from 'react'

export default function Contacts() {
  return (
    <div className="contact">
      <div className="card w-75 m-auto mt-5">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="">
              <i className="fa-solid fa-paper-plane text-danger"></i>
              <span> karimmagdy096@gmail.com</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="https://www.linkedin.com/in/karimagdy14/">
              <i className="fab text-primary fa-linkedin"></i>
              <span> karimagdy14</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="">
              <i className="fa-brands fa-github"></i>
              <span> KarimMagdy96</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
