import React from 'react';
import './FrontPage.css';

export default function FrontPage() {
    return (
        <div className="front-page">
            <div className="front--header">
                <div className="front--logo">
                    <h1>Ange</h1>
                    <img src={require('../images/angel.png')} />
                    <h1>Love</h1>
                </div>
                <ul className="front--menu">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <div className="front--body" style={{ backgroundImage: `url(${require("../images/regal.png")}) `}}>
                <button className="front--button">Browse our gifts</button>
            </div>
        </div>  
    );
}