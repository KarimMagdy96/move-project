import Axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({ saveUserData }) {
  const [error, seterror] = useState("");
  const [errorList, seterrorList] = useState([]);
  const [isLodaing, setIsLoading] = useState(false);
  const [succuss, setsuccuss] = useState("");
  let navigate = useNavigate();
  const [user, setusers] = useState({
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
    let validInput = validateLoginForm();
    if (validInput.error) {
      seterrorList(validInput.error.details);
      setIsLoading(false);
    } else {
      let { data } = await Axios.post(
        "https://route-movies-api.vercel.app/signin",
        user
      );
      if (data.message === "success") {
        setsuccuss(data.message);
        setIsLoading(false);
        localStorage.setItem("token", data.token);
        saveUserData();
        navigate("/home");
        //nav to home
      } else {
        seterror(data.message);
        setIsLoading(false);
      }
    }
  }
  function validateLoginForm() {
    let validator = Joi.object({
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
      <div className=" w-75 mx-auto mt-5 mb-5 pb-5">
        <h2 className="mb-5 fw-bold">Login</h2>

        <form onSubmit={sumbitForm}>
          {errorList.map((error, i) =>
            i == 1 ? (
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
            className=" btn text-white active btn-outline-danger rounded-pill px-3 fw-bold w-100 mb-5"
          >
            {isLodaing === true ? (
              <i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
