import React, { useState } from "react";
export default function Register() {

    const [user, setusers] = useState({
        first_name: '',
        last_name: '',
        age: 0,
        email: '',
        password:''
    })
    function grtuserdata(e) {
        let myuser = { ...user }
        e.tar
    }

  return (
    <>
      <div className=" w-75 mx-auto">
        <h2>Register Now</h2>
        <form>
          <label htmlFor="first_name">First Name:</label>
          <input
            onChange={grtuserdata}
            type="text"
            id="first_name"
            name="first_name"
            className=" form-control mb-2"
          />

          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            className=" form-control mb-2"
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            className=" form-control mb-2"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className=" form-control mb-2"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className=" form-control mb-2"
          />
          <button type="sumbit" className=" btn btn-outline-info">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
