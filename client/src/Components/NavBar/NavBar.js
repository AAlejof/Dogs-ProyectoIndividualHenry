import React from 'react';
import styles from './NavBar.module.css';
import image from "../../assets/Img/paw_logo.png";
import { Link } from "react-router-dom";



const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <Link style={{ textDecoration: 'none' }} to="/home">
                <div className={styles.nameLogo}>
                    <img className={styles.Logo} src={image} alt="Woofipedia logo" />
                    <h1 className={styles.siteName}>Woofipedia</h1>
                </div>
            </Link>
            <ul className={styles.buttonList}>
                <li>
                    <Link to="/home"><button className={styles.navbarButton}>Home</button></Link>
                </li>
                <li>
                    <Link to="/create"><button className={styles.navbarButton}>Create</button></Link>
                </li>
                {/* <li>
          <Link to="/About"><button className={styles.navbarButton}>About</button></Link>
        </li> */}
                <li>
                    <Link to='/'><button className={styles.navbarButton}>Logout</button></Link>
                </li>
            </ul>


        </nav>
    );
}

export default Navbar;