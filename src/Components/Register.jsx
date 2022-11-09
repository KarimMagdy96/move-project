import Axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



//first component my app will strat from 



export default function Register() {
    const [error, seterror] = useState("");
    const [errorList, seterrorList] = useState([]);
    const [isLodaing, setIsLoading] = useState(false);
    const [succuss, setsuccuss] = useState("");
    let navigate = useNavigate();
    const [user, setusers] = useState({
        first_name: "",
        last_name: "",
        age: 0,
        email: "",
        password: "",
    });
    function getUserData(e) {
        let myuser = { ...user };
        myuser[e.target.name] = e.target.value;
        setusers(myuser);
    }
    async function sumbitForm(e) {
        e.preventDefault();
        setIsLoading(true);
        let validInput = validateRegisterForm();
        if (validInput.error) {
            seterrorList(validInput.error.details);
            setIsLoading(false);
        } else {
            let { data } = await Axios.post(
                "https://route-egypt-api.herokuapp.com/signup",
                user
            );
            if (data.message === "success") {
                setsuccuss(data.message);
                setIsLoading(false);
                navigate("/login");
                //nav to home
            } else {
                seterror(data.message);
                setIsLoading(false);
            }
        }
    }
    function validateRegisterForm() {
        let validator = Joi.object({
            first_name: Joi.string().alphanum().min(3).max(30).required(),
            last_name: Joi.string().alphanum().min(3).max(30).required(),
            age: Joi.number().min(16).max(80).required(),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
                .required(),
            password: Joi.string()
                .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
                .required(),
        });
        return validator.validate(user, { abortEarly: false });
    }
    return (
      <>

        //1- form to register user data on each change will call
        /**get user data function**
         *  get user data :
         *      1- takes deep copy of data from usestate that i already make it object will dummy data.
         *       2- data will be saved by this function with simple approach i make the name is same as key and assign th value to it so each time i will press on e.target it will save in defrant key .
         *       3-
         */
        
        <div className=" w-75 mx-auto mt-3">
          <h2 className="mb-5">Register Now</h2>

          <form onSubmit={sumbitForm}>
            {errorList.map((error,i) =>
              i == 4 ? (
                <div className=" alert alert-danger">Password Invalid</div>
              ) : (
                <div className=" alert alert-danger">{error.message}</div>
              )
            )}
            {error.length > 0 ? (
              <div className=" alert alert-danger">{error}</div>
            ) : succuss.length > 0 ? (
              <div className=" alert alert-success">{succuss}</div>
            ) : (
              ""
            )}
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
              id="last_name"
              name="last_name"
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
              {isLodaing === true ? (
                <i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </>
    );
}
