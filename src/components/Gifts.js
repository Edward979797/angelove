import React from 'react';
import "./Gifts.css";
import catalogue from '../Catalogue';

export default function Gifts() {
    const beautyProducts = catalogue.filter(c => c.type === 'Beauty');

    const sweetProducts = catalogue.filter(c => c.type === 'Sweet');

    const decorProducts = catalogue.filter(c => c.type === 'Decor');

    function createProducts(products) {
        return products.map(product => {
            return product.sizes.map(size => {
                return (
                    <div className="product" key={`${product.name}${size.name}`}>
                        <img src={require('../images/product.jpeg')} />
                        <h3 className="product-name">{`${product.name}`}<br/>{`(${size.name})`}</h3>
                        <p>{`Starting from CA${size.price}`}</p>
                    </div>
                )
            })
        })
    }


    return (
        <div className="gifts">
            <h2>Beauty</h2>
            <div className="product-display">
                {(createProducts(beautyProducts))}
            </div>
            <h2>Sweets</h2>
            <div className="product-display">
               {createProducts(sweetProducts)}
            </div>
            <h2>Decor</h2>
            <div className="product-display">
                {createProducts(decorProducts)}
            </div>
        </div>
    )
}