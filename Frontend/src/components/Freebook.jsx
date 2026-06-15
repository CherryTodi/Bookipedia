import React from 'react'
import Cards from "../Cards"; //Since Cards.jsx is one folder above components, use:
import SliderModule from "react-slick";
const Slider = SliderModule.default
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../list.json"; //ek folder do folder phir public ke andar hai list.json*/

function Freebook(){
    const filterData = list.filter((data)=>data.category==="Free"); //Filter is function in array to filter how eemts based on it
     var settings = {
    dots: true,
    infinite: false, //react slick //responsive
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, //tailwind css break point//graeter than 1024c pxel than u will be 3 cards
        settings: {
          slidesToShow: 3, //choose how many slides u want to see
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,//<600 see 2 cards
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
        <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
            <h1 className="font-bold text-2xl pb-2">Free Offered Courses</h1>
            <p >Explore our collection of free books and start learning today.
                 Discover knowledge, inspiration, and new ideas without spending a penny.

            </p>
            </div> {/*//heading or para ko separate div mai rakhte h*/}{/*In JSX, you cannot write comments like normal JavaScript after HTML tags */}
        <div>   
            <Slider {...settings}>
  {filterData.map((item) => (
    <Cards item={item} key={item.id} />
  ))}
</Slider>
        </div>
      </div>   
        </>
    );
}
export default Freebook ;