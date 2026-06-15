import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./components/courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import {} from "react-router-dom"
function App() {
  return (
    <div >
        {/*Home/>
        <Course />*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
    </div>  
  )
}

export default App
