import { React, useState } from 'react';
import './nav.scss'
import Menu from "./menu.png"


const Nav = () => {

    const [isNavDisplayed, toggleDisplayNav] = useState(false)

    function toggleNavContent() {
        console.log(isNavDisplayed)
        toggleDisplayNav((prevToggle) => {
            return !prevToggle;
        })
    }

    return (
        <nav className='nav'>
            <div className="menu-container">
                <p>JAKE COURTNEY</p>
                <button onClick={() => toggleNavContent()}>
                    <img className='menu-icon' src={Menu} alt="hamburger menu" />
                </button>
            </div>
            <div className="drawer-container">
                <ul className='menu-list'>
                    <li className={isNavDisplayed ? "shown" : "hidden"}><a href="">ABOUT</a></li>
                    <li className={isNavDisplayed ? "shown" : "hidden"}><a href="">PROJECTS</a></li>
                    <li className={isNavDisplayed ? "shown" : "hidden"}><a href="">HIRE ME</a></li>
                    <li className={isNavDisplayed ? "shown" : "hidden"}><a href="">EXTRA</a></li>
                </ul>
                <div className="black-bar"></div>
            </div>
        </nav>
    );
}

export default Nav;
