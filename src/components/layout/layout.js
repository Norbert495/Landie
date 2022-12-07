import * as React from 'react';
import {} from './layout.module.css'
import Navigation from "../navigation/navigation";
import Hero from "../hero/hero";
import Section from "../section/section";
import Section2 from "../section2/section2";
import Price from "../price/price";
import Footer from "../footer/footer";
const Layout = () => {
    return (
        <>
            <Navigation />
            <Hero />
            <Section />
            <Section2 />
            <Price />
            <Footer />
        </>
    )
}



export default Layout