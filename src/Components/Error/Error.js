import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Error = () => {
    return (
        <>
            <Header></Header>
            <div style={{ margin: '94px' }}>
                <h3 style={{ color: 'red', fontSize: '40px', fontWeight: 'bolder' }}>ERROR 401</h3>
                <h5 style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>Page not found</h5>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Error;