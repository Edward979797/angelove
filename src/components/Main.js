import React, { useState } from 'react';
import './Main.css';
import Gifts from './Gifts';
import About from './About';
import FAQ from './FAQ';
import Contact from './Contact';

export default function Main() {
    const [ page, setPage ] = useState('gifts');

    function showPage() {
        switch(page) {
            case 'gifts':
                return <Gifts />
            case 'about':
                return <About />
            case 'faq':
                return <FAQ />
            case 'contact':
                return <Contact />
        }
    }

    function showComingSoon() {
        const testimonials = document.querySelector('#testimonials');

        testimonials.textContent = 'Coming Soon!';

        setTimeout(() => {
            testimonials.textContent = 'Testimonials';
        }, 2000);
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
                        <li onClick={() => setPage('about')}>About Us</li>
                        <li onClick={() => setPage('faq')}>FAQ</li>
                        <li onClick={() => setPage('gifts')}>Gifts</li>
                        <li onClick={() => setPage('contact')}>Contact</li>
                        <li id="testimonials" onMouseOver={showComingSoon}>
                            Testimonials
                        </li>
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