import  Axios  from "axios";
import React, { useState } from "react";
export default function Register() {
    const [error, seterror] = useState('')
    const [user, setusers] = useState({
        first_name: '',
        last_name: '',
        age: 0,
        email: '',
        password:''
    })
    function getUserData(e) {
        let myuser = { ...user }
        myuser[e.target.name] = e.target.value
        setusers(myuser)
    }
   async function sumbitForm(e) {
        e.preventDefault();
       let {data} = await Axios.post('https://route-egypt-api.herokuapp.com/signup', user)
       if (data.message==='success') {
           //nav to home
       } else {
           seterror(data.message)
       }
    }
  return (
    <>
      <div className=" w-75 mx-auto mt-3">
              <h2 className="mb-5">Register Now</h2>
              
              <form onSubmit={sumbitForm}>
                  {error.length > 0 ? <div className=" alert alert-danger">{error}</div>:""}
          <label htmlFor="first_name">First Name:</label>
          <input
            onChange={getUserData}
            type="text"
            id="first_name"
            name="first_name"
            className=" form-control mb-2"
          />

          <label htmlFor="last-name">Last Name:</label>
          <input
            onChange={getUserData}
            type="text"
            id="last-name"
            name="last-name"
            className=" form-control mb-2"
          />
          <label htmlFor="age">Age:</label>
          <input
            onChange={getUserData}
            type="number"
            id="age"
            name="age"
            className=" form-control mb-2"
          />

          <label htmlFor="email">Email:</label>
          <input
            onChange={getUserData}
            type="email"
            id="email"
            name="email"
            className=" form-control mb-2"
          />

          <label htmlFor="password">Password:</label>
          <input
            onChange={getUserData}
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
