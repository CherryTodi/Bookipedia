import React from 'react'
import Navbar from "../Navbar";
import Course from "../Course";
import Footer from "../Footer"

function Courses() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen"> {/*scrren ke min height mai usko show karenge */}
      <Course />
      </div>
      <Footer/>
    </div>
  )
}

export default Courses