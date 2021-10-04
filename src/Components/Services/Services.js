import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './services.css';
import Header from '../Header/Header';
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';


const Services = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    return (
        <>
            <Header></Header>

            <div className="teams">
                <h1 style={{ fontSize: '40px', margin: '10px', padding: '10px' }}>Star Football Academy</h1>
                <div className="row">
                    {
                        teams.map(team => (
                            <div className="col-md-6">
                                <div className="cart">
                                    <div className="logo">
                                        <img className='w-75' src={team.img} alt="" />
                                    </div>
                                    <h3>{team.title}</h3>
                                    <p> <small>Minimum age: {team.min_age}</small> </p>
                                    <p> <small>Maximum age: {team.max_age}</small> </p>
                                    <p>Registration fees: ${team.fees}</p>
                                    <NavLink to='/joinus'>
                                        <Button as="input" type="button" value="Join Us" />
                                    </NavLink>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    );
};

export default Services;