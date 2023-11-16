
import logoimage from '../../assets/logo.jpeg'
import HamburgerMenu from './HamburgerMenu';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
    <div className={classes.navbar}>
        <img className={classes.log} src={logoimage} alt="Anderson Municipal Airport" width="125" height="125"/>
        <HamburgerMenu/>
    </div>)
};

export default NavBar;