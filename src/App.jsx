import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Tv from "./Components/Tv";
import People from "./Components/People";
import Notfound from "./Components/Notfound";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Move from "./Components/Move";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Register from "./Components/Register";
import Details from "./Components/Details";
import jwtDecode from "jwt-decode";
import axios from "axios";







function App() {

  const [userdata, setUserData] = useState(null);
  let navigator = useNavigate();






const [treandingmovies, settreandingmovies] = useState([]);
const [treandingtv, settreandingtv] = useState([]);
const [treandingpeople, settreandingpeople] = useState([]);

async function getdata(mediaType, callback) {
  let { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=fd3c31e2d7a54303dc08756b66824aef`
  );
  callback(data.results);
}
useEffect(() => {
  getdata("movie", settreandingmovies);
  getdata("tv", treandingtv);
  getdata("person", treandingpeople);
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
      
      <Navbar userdata={userdata} logOut={logOut} />

      <div className="">
        <Routes>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Home
               
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="details"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
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
          <Route
            path="people"
            element={
              <ProtectedRoute>
                <People />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="move"
            element={
              <ProtectedRoute>
                <Move />
              </ProtectedRoute>
            }
          />
          <Route
            path="about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <ProtectedRoute>
                <Contacts />
              </ProtectedRoute>
            }
          />
          <Route path="register" element={<Register />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
