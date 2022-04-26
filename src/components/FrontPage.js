import React from 'react';
import './FrontPage.css';

export default function FrontPage() {
    return (
        <div className="front-page" style={{ backgroundImage: `url(${require("../images/regal.png")}) `}}>
            <div className="front--welcome">
                <div className="front--logo">
                    <h1>Ange</h1>
                    <img src={require('../images/angel.png')} />
                    <h1>Love</h1>
                </div>
                <div className="front--sublogo">
                    Custom gifts for heavenly events.
                </div>
                <p>Birthdays, baby showers, and more&nbsp;&nbsp;|&nbsp;&nbsp;Shipping to anywhere in North America</p>
                <div className="front--link">
                    <button onClick={() => window.location.href='/main'}>
                        Browse our selection
                    </button>
                </div>
            </div>
        </div>  
    );
}