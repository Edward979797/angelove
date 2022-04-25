import React, { useState } from 'react';
import './Main.css';
import Gifts from './Gifts';

export default function Main() {
    const [ page, setPage ] = useState('gifts');

    function showPage() {
        switch(page) {
            case 'gifts':
                return <Gifts />
        }
    }

    return (
        <div className="main">
            <div className="header">
                <div className="header--logo">
                    <h1>Ange</h1>
                    <img src={require('../images/angel.png')} />
                    <h1>Love</h1>
                </div>
                <div className="header--menu">
                    <ul>
                        <li>Gifts</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>
            <div className="body" style={{ backgroundImage: `url(${require("../images/regal.png")}) `}}>
                <div className="content">
                    {showPage()}
                </div>
            </div>
            <div className="footer">
                {`Angelove © ${new Date().getFullYear()}`}
            </div>
        </div>
    );
}