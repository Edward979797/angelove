import React from 'react';
import './Main.css';

export default function Header() {
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
                    <div className="product-display">
                        <div className="product">
                            <img src={require('../images/product.jpeg')} />
                            <h3>Bottle (large)</h3>
                            <p>Starting from CA$2.50</p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product.jpeg')} />
                            <h3>Bottle (large)</h3>
                            <p>Starting from CA$2.50</p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product.jpeg')} />
                            <h3>Bottle (large)</h3>
                            <p>Starting from CA$2.50</p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product.jpeg')} />
                            <h3>Bottle (large)</h3>
                            <p>Starting from CA$2.50</p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product.jpeg')} />
                            <h3>Bottle (large)</h3>
                            <p>Starting from CA$2.50</p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product.jpeg')} />
                            <h3>Bottle (large)</h3>
                            <p>Starting from CA$2.50</p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product.jpeg')} />
                            <h3>Bottle (large)</h3>
                            <p>Starting from CA$2.50</p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product.jpeg')} />
                            <h3>Bottle (large)</h3>
                            <p>Starting from CA$2.50</p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product.jpeg')} />
                            <h3>Bottle (large)</h3>
                            <p>Starting from CA$2.50</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}