import Axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//first component my app will strat from

export default function Register() {
  //-----------------------------------------------------
  const [error, seterror] = useState("");
  const [errorList, seterrorList] = useState([]);
  const [isLodaing, setIsLoading] = useState(false);
  const [succuss, setsuccuss] = useState("");
  const [user, setusers] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });

  //-----------------------------------------------------

  let navigate = useNavigate();

  //-----------------------------------------------------------------
  function getUserData(e) {
    let myuser = { ...user };
    myuser[e.target.name] = e.target.value;
    setusers(myuser);
  }

  //-------------------------------------------------

  async function sumbitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    let validInput = validateRegisterForm();
    if (validInput.error) {
      seterrorList(validInput.error.details);
      setIsLoading(false);
    } else {
      let { data } = await Axios.post(
        "https://route-movies-api.vercel.app/signup",
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
  //----------------------------------------------------------

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
  //-----------------------------------------------------------------------

  return (
    //1-starting from the form to register user data on each change will call
    //get user data function
    //get user data :
    //1- takes deep copy of data from use-state
    //that i already make it object with dummy data.
    // 2- data will be saved by this function with simple approach i
    // make the name is same as key
    //and assign th value to it so each time i will press * on e.target it
    //will save in deferent key

    //3- then i will push this object to --user array at use state.

    //------------------------------------------------------------------

    // 2- on submit

    //i will call submit-Form fun that will:

    //1-set is loading to true thats simple way to make loading animation while waiting for respond from backend
    //2- call --validateRegisterForm fun and save return to validator var
    //in validation function i use ---joi-- library to validate it just make dummy obj with value of validate formula
    //and return validate method with user object and abort early to get full errors
    //3-check is there is any errors send it to Error list use state the map on the list and display errors on alert
    //else send data to api using --Axios-- and check for response if success i will use use navigate to login component
    // massage come with error? send it to error set state and check is there any error push it as alert in return.
    //to login
    <>
      <div className=" w-75 mx-auto mt-3 ">
        <h2 className="my-3 fw-bold">Register Now</h2>

        <form className="form-floating" onSubmit={sumbitForm}>
          {errorList.map((error, i) =>
            i == 4 ? (
              <div key={i} className=" alert alert-danger">Password Invalid</div>
            ) : (
              <div key={i} className=" alert alert-danger">{error.message}</div>
            )
          )}
          {error.length > 0 ? (
            <div className=" alert alert-danger">{error}</div>
          ) : succuss.length > 0 ? (
            <div className=" alert alert-success">{succuss}</div>
          ) : (
            ""
          )}
          <div className="form-floating mb-3">
            <input
              onChange={getUserData}
              type="text"
              id="first_name"
              name="first_name"
              className=" form-control mb-2"
              placeholder="First Name"
            />
            <label htmlFor="floatingInput text-muted">First Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={getUserData}
              type="text"
              id="last_name"
              name="last_name"
              className=" form-control mb-2"
              placeholder="Last Name"
            />
            <label htmlFor="floatingInput text-muted">Last Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={getUserData}
              type="number"
              id="age"
              name="age"
              className=" form-control mb-2"
              placeholder="Age"
            />
            <label htmlFor="floatingInput ">Age</label>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={getUserData}
              type="email"
              id="email"
              name="email"
              className=" form-control mb-2 "
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput text-muted">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={getUserData}
              type="password"
              id="password"
              name="password"
              className=" form-control mb-2"
              placeholder="PassWord"
            />
            <label htmlFor="floatingInput text-muted">PassWord</label>
          </div>
          <button
            type="sumbit"
            className=" btn text-white active btn-outline-danger rounded-pill px-3 fw-bold w-100"
          >
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
