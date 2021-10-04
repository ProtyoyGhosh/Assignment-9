import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Academy = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/detailData.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <Header></Header>

            <div className="row">
                {
                    services.map(service => (
                        <div className="col-md-6">
                            <div className="cart">
                                <div className="logo">
                                    <img src={service.detail_img} alt="" />
                                </div>
                                <h3>Qualification: {service.education}</h3>
                                <p>Academy service: {service.academy}</p>
                                <p><small>Training: {service.training_days}</small></p>
                                <p><small>Timing:{service.training_time}</small></p>
                                <p><small>Training Kits: {service.training_kits}</small></p>
                                <p><small>Medical: {service.medical_checkup}</small></p>
                                <p><small>Perticipating in {service.tournaments}</small></p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Footer></Footer>


        </div>
    );
};

export default Academy;