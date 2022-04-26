import React from 'react';
import './FAQ.css';

export default function FAQ() {
    return (
        <div className="faq">
            <h2 className="faq--header">FAQs</h2>
            <div className="faq--text">
                <b>What kinds of events are your products best suited for?</b>
                <p>Our products have a place at any kind of event you can think of.
                    Some examples include birthdays, graduations, weddings, religious
                    ceremonies, baby showers, funerals, bridal showers, and more!
                </p>
                <b>How do I place an order?</b>
                <p>We take orders over on Instagram. Please see the Contact page for
                    more information.
                </p>
                <b>How does sizing work?</b>
                <p>We offer three different sizes. Vials are small-sized, Flasks are medium,
                    and Chalices are the largest of the three. Please note that some products
                    are only available in one or two sizes.
                </p>
                <b>Can I add any additional flourishes to my order?</b>
                <p>Yes! We can add a decorative feather to any item in our selection (50 cents extra)
                    and you can also choose to include dried flowers in any of our bath salts (50 cents extra).
                </p>
            </div>
        </div>
    );
}