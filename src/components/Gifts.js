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
            <p className="category-description">
                Our beauty line features a selection of aromatic bath salts and luxuriant
                skincare products. There's no better gift than nourishment for the body and mind.
            </p>
            <div className="product-display">
                {(createProducts(beautyProducts))}
            </div>
            <h2>Sweets</h2>
            <p className="category-description">
                To satisfy your sugary cravings. If you're looking to add that special hint of tastiness
                to your gift basket and/or event, look no further than our assortment of sweet treats. 
            </p>
            <div className="product-display">
               {createProducts(sweetProducts)}
            </div>
            <h2>Decor</h2>
            <p className="category-description">
                Take your event's aesthetic to the next level with our dazzling array of decorative products. Add
                a gold-dipped feather for extra style points.
                
            </p>
            <div className="product-display">
                {createProducts(decorProducts)}
            </div>
        </div>
    )
}