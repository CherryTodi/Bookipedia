import React from 'react'
import Navbar from "../components/Navbar" //Without import, React doesn’t know what Navbar means
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Freebook from "../components/Freebook"
//as src ke andar components uske andar navbar
function Home() {
  return (
    <div >
        <Navbar/>
        <Banner/>
        <Freebook/>
        <Footer/>
    </div>  
  )
}

export default Home

