
import logoimage from '../../assets/logo.jpeg'
import SearchBar from './HamburgerMenu';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
    <div className={classes.navbar}>
        <img className={classes.log} src={logoimage} alt="Anderson Municipal Airport"/>
        {/* <SearchBar/>  */}
    </div>)
};

export default NavBar;