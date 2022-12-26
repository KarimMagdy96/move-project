import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Tv from "./Components/Tv";

import Notfound from "./Components/Notfound";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Move from "./Components/Move";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Details from "./Components/Details";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { func } from "joi";
import CounterContextProvider from "./context/store";
function App() {
  const [userdata, setUserData] = useState(null);
  let navigator = useNavigate();

  let mov;

  const [tmoves, settmoves] = useState([]);
  const [ttv, setttv] = useState([]);
  const [tpeople, settpeople] = useState([]);

  async function gettrendings(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=fd3c31e2d7a54303dc08756b66824aef`
    );
    callback(data.results);
  }

  useEffect(() => {
    gettrendings("movie", settmoves);
    gettrendings("tv", setttv);
    gettrendings("person", settpeople);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, []);
  function logOut() {
    setUserData(null);
    localStorage.removeItem("token");
    navigator("/login");
  }

  function ProtectedRoute(props) {
    if (localStorage.getItem("token") === null) {
      //nav to home
      return <Navigate to="/login" />;
    } else {
      return props.children;
      //nav where he want to go
    }
  }
  function saveUserData() {
    let encodedToken = localStorage.getItem("token");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }

  return (
    //STARTING FROM FUNCTION PROTECT ROUTE TO CHEK IF ANY DATA ON LOCAL STORAGE ? GO TO PAGE ELSE GO TO LOGIN
    // i use useeffect to prevint relode effect by calling ---save userdata function--- that alreeady been call in login component to save the respond token  in use state
    //and send it to nav bar to cheeak if its full hide or show some labels
    //last un is logout and i send it to nav to call it when logout and redirect to login

    <>
      <CounterContextProvider>
        <Navbar userdata={userdata} logOut={logOut} />
        <Routes>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="details"
            element={
              <ProtectedRoute>
                {" "}
                <Details />
              </ProtectedRoute>
            }
          >
            <Route
              path=":id"
              element={
                <ProtectedRoute>
                  {" "}
                  <Details />
                </ProtectedRoute>
              }
            >
              <Route
                path=":category"
                element={
                  <ProtectedRoute>
                    {" "}
                    <Details />
                  </ProtectedRoute>
                }
              ></Route>
            </Route>
          </Route>
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="tv"
            element={
              <ProtectedRoute>
                <Tv />
              </ProtectedRoute>
            }
          />

          <Route path="login" element={<Login saveUserData={saveUserData} />} />
          <Route
            path="move"
            element={
              <ProtectedRoute>
                <Move />
              </ProtectedRoute>
            }
          />

          <Route path="register" element={<Register />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </CounterContextProvider>
    </>
  );
}

export default App;
