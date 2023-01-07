import { useState } from "react";
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
import MoviesContextProvider from "./context/store";
function App() {
  const [userdata, setUserData] = useState(null);

  let navigator = useNavigate();

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
    <>
      <MoviesContextProvider>
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
      </MoviesContextProvider>
    </>
  );
}

export default App;
