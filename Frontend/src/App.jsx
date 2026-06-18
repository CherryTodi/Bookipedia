import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./components/courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import toast, { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider";
import {Navigate} from "react-router-dom"
function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <div>
        {/*Home/>
        <Course />*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Toaster />
    </div>  
  )
}

export default App
