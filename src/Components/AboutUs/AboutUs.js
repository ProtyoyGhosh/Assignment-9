import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Aboutus.css';

const AboutUs = () => {
    return (
        <>
            <Header></Header>
            <div>
                <h3 style={{ fontSize: '35px', marginTop: '5px', color: 'green' }}>Join us to help you become a Football Star</h3>

                <p className='about'>
                    Star Football Academy or simply 'SFA as it is fondly known, is one of the premier football academies in the world. Located in Bangladesh, SFA serves as a favourite destination for players from all over Bangladesh and Overseas.

                    Bangladesh’s 182nd ranking (as of 2018) in World Football is not in line with the talent available. There exists a huge gap to fill up.

                    SFA attempts to fill up the gap and has come up with a residential football academy to provide the right opportunity and platform to a larger number of dreaming players. With state-of-the-art infrastructure, experienced & national level coaches, excellent ambiance, KFA remains the first desire of all budding footballers. While football remains top priority at KFA, academics are also taken care of and given due importance.
                </p>
            </div>

            <Footer></Footer>
        </>

    );
};

export default AboutUs;