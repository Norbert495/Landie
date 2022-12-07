import React, {useState} from 'react';
import {Link} from "gatsby";
import {logo, btn, hamburgerLines, line1, line2, line3, none, display } from './navigation.module.css'

const Navigation = () => {
    const [hamburger, setHamburger] = useState(false)
    return (
        <header>
            <nav className={!hamburger ? none : display}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <h4 className={logo}>Landie</h4>
                <button className={ btn }>Buy Now</button>

            </nav>
            <div className={hamburgerLines} onClick={() => setHamburger(!hamburger)}>
                <span className={!hamburger ? '' : line1}></span>
                <span className={!hamburger ? '' : line2}></span>
                <span className={!hamburger ? '' : line3}></span>
            </div>
        </header>
    )
}
export default Navigation;