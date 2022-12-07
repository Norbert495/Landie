import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { background, container, contentPrice, price, priceText, btn } from './price.module.css'
const Price = () => {
    return (
        <section className={ container }>
            <StaticImage className={ background } src='../../images/img.png' alt='background' />
            <div className={contentPrice}>
                <h3>A Price To Suit Everyone</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                <h2 className={ price }>$40</h2>
                <p className={ priceText }>UI Design Kit</p>
                <p>See, One price. Simple.</p>
                <button className={ btn }>Purchase Now</button>
            </div>

        </section>
    )
}

export default Price;