
import logoimage from '../../assets/logo.jpeg'
import HamburgerMenu from './HamburgerMenu';
import classes from './NavBar.module.css';
import SocialMedia from './SocialMedia';
import NavBarWeather from './NavBarWeather';

const NavBar = () => {
    return (
    <>
        <div className={classes.navbar}>
        <img className={classes.log} src={logoimage} alt="Anderson Municipal Airport" width="125" height="125"/>
        <NavBarWeather className={classes.navBarWeather} />
        <div className={classes.menu}>
            <SocialMedia/>
            <HamburgerMenu/>
        </div>
    </div>
    </>
    )
};

export default NavBar;