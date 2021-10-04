import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='header'>

            {/* creting a navbar with react boostrap */}

            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link> <NavLink to='/home'>Home</NavLink> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><NavLink to='/aboutus'>About Us</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><NavLink to='/services'>Our Academys</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" ><NavLink to='/joinus'>Join Us</NavLink>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Header;