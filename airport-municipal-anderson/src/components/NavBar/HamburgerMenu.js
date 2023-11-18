import React, { useState } from 'react';
import classes from './HmaburgerMenu.module.css'

const HamburgerMenu = () => {
    const [nowOpen, setNowOpen] =useState(false);

    const toggleSwitch = (event) => {
        setNowOpen(!nowOpen);
    };
    return (
        <div className={classes.hamburgerContainer}>
            <div className={classes['hamburger-menu']} onClick={toggleSwitch}>
                <div className={classes.bar}/>
                <div className={classes.bar}/>
                <div className={classes.bar}/>
            </div>
            <div>
            {/*/link# acts as a hyperlink placeholder for the moment until said links are established*/}
            {nowOpen && (
                <div className={classes.dropdown}>
                    <a href="/link1" className={classes.dropdownItem}>Weather</a>
                    <a href="/link2" className={classes.dropdownItem}>Radar</a>
                    <a href="/link3" className={classes.dropdownItem}>Oil Prices</a>
                    <a href="/link3" className={classes.dropdownItem}>Contact</a>
                    <a href="/link3" className={classes.dropdownItem}>Admin Login</a>
                    <a href="/link3" className={classes.dropdownItem}>Airport Information</a>
                </div> )}
            </div>
        </div>
    );
};

export default HamburgerMenu;