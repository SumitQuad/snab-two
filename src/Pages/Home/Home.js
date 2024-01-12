import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import NavBarTwo from '../../Components/NavBarTwo/NavBarTwo';
import Hero from "../../Components/Hero/Hero";
import Mission from "../../Components/Mission/Mission";
import Functionality from "../../Components/Functionalities/Functionalities";
import Experts from "../../Components/Experts/Experts";
import Panda from "../../Components/Panda/Panda";
import Offers from "../../Components/Offers/Offers";
import Events from "../../Components/Events/Events";
import Testimonial from '../../Components/Testimonial/Testimonial';
import Founders from '../../Components/Founders/Founders';
import Activities from '../../Components/Activities/Activities';
import Footer from "../../Components/Footer/Footer";
import CopyRight from "../../Components/CopyRight/CopyRight";

function Home() {
    return (
        <>
        <NavBar/>
        <NavBarTwo/>
        <Hero/>
        <Mission/>
        <Functionality/>
        <Experts/>
        <Panda/>
        <Offers/>
        <Events/>
        <Testimonial/>
        <Founders/>
        <Activities/>
        <Footer/>
        <CopyRight/>
        </>
    )
}

export default Home
