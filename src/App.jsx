import { useState } from "react";
import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
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
import Logout from "./Components/Logout";
import jwtDecode from "jwt-decode";
function App() {
  const [userdata, setUserData] = useState(null)


  function ProtectedRoute() {
    if (localStorage.getItem("token") === null) {
      //nav to home
      return <Navigate to='/login'/>
    }
    else {
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
      <Navbar userdata={userdata} />
      <div className=" container-fluid">
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
            path="home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="tv" element={<Tv />} />
          <Route path="people" element={<People />} />
          <Route path="login" element={<Login saveUserData={saveUserData} />} />
          <Route path="move" element={<Move />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
