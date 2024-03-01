import React from 'react';
import './home.scss'
import Photo from "./pfp.png"

const Home = () => {
    return (
        <main className='home'>
            <div className="intro-container">
                <img src={Photo} alt="" />
            </div>
        </main>
    );
}

export default Home;
