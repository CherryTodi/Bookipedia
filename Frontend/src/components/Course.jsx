import React from 'react'
import Cards from "../Cards";
import list from "../list.json"; //ek folder do folder phir public ke andar hai list.json*/
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-24">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">
                We're delighted to have you{" "}
                <span className="text-pink-500">Here! :)</span>
            </h1>
            <p className="mt-12">
                Discover books that inspire, educate, and entertain.
                From timeless classics to modern bestsellers, our collection has something for every reader.
                Explore different genres, expand your knowledge, and fuel your imagination.
                Your next favorite book is just a page away!
            </p>
           <Link to="/">  {/* this helps us to return to home page whenever we click back */}
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button> {/*creating back button after paragraph */}
           </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4"> {/*mapping is done below for cars items*/}
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>

     </div>
    </> 
  )
}

export default Course