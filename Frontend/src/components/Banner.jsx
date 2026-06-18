import React from 'react'
import banner from "../assets/banner.jpg.jpg"

function Banner() {
  return (
    <>{/*react pattern use krre h bagar use nai kenge toh sirf ek hi div banapayenge using react v we make one parent div inside that multiple div*/}
       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">{/*parent div mai navbar se copy kardia*/}
           <div className="w-full order-2 md:order-1 md:w-1/2 mt-20 md:mt-8"> {/*small device h toh ek left ko pura line mai likho agar medium se bara hai toh half half */}
              <h1 className="text-3xl  font-bold leading tight">
                Welcome to Bookipedia,your gateway{" "} 
                 <span className="text-pink-500" >to learning something</span>
                 <br />
                 <span className="text-pink-500" >new everyday!!</span>
              </h1>
              
              <p className="mt-8 text-xl text-pink-800 leading-relaxed max-w-xl">{/*paragraph*/}
                 Explore thousands of books, discover new ideas,
                 and expand your knowledge every day.
                 Whether you are a student, a curious learner,
                 or a passionate reader, there is always something
                 new waiting to be discovered.
              </p>
               <div className="mt-6">
                <label className="input validator">
                 <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <g
                     strokeLinejoin="round"
                     strokeLinecap="round"
                     strokeWidth="2.5"
                     fill="none"
                     stroke="currentColor"
                    >
                     <rect width="20" height="16" x="4" y="4" rx="2"></rect>
                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                 </svg>
                 <input type="email" placeholder="mail@site.com" required />
                 </label>
                 <div className="validator-hint hidden">Enter valid email address</div>
                 
           
             </div>
             <button className="btn btn-active btn-secondary mt-3">Get Started</button>
           
            </div>{/*left div ko left saaman ke niche band karo*/}


           <div className="order-1 w-full md:w-2/3 flex justify-center md:justify-end"><img src={banner} className="w-80 md:w-96" alt=""/> </div> {/*order is class in tailwind css*/}
              
       </div>
    </>
  ) 
}

export default Banner
