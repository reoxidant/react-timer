import React from "react";
import timer from './timer.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <img src={timer} alt="timer-icon"/>
            <h3>React Timer</h3>
        </header>
    )
}

export default Header;