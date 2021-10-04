import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <>
            {/* rendering all the highlited components in this website */}

            <Header></Header>
            <Slider></Slider>
            <Services></Services>
            <Footer></Footer>
        </>
    );
};

export default Home;