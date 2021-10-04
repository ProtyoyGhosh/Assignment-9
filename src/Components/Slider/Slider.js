import React from 'react';
import slider1 from '../../images/slider3.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider1.jpg'
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
// creating a slider with react boostrap
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                    style={{ height: '650px' }}
                />
                <Carousel.Caption>
                    <h3 style={{ fontWeight: 'bolder', fontSize: '40px' }}>We are open for U15,U19,Womens and Mens Team</h3>
                    <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>Send Your CV and we will call you up for a trail.Hurry up for the registration propcess.See you mate!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                    style={{ height: '650px' }}
                />
                <Carousel.Caption>
                    <h3 style={{ fontWeight: 'bolder', fontSize: '40px' }}>Nation level U15 & U19 Tournaments are comming soon</h3>
                    <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>Register today & Join in the best academy to perticipate in the best of games.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                    style={{ height: '650px' }}
                />
                <Carousel.Caption>
                    <h3 style={{ fontWeight: 'bolder', fontSize: '40px' }}>Senior Level Call</h3>
                    <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>Congratulations to all the academy boys for the call up in the main / first team.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;