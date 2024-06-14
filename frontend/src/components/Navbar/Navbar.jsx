import React , {useState} from 'react';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';



export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);//usestate to track menu button is opening and closing


  return (
    <nav className={styles.navbar}>
    <a className={styles.title} href="/">CalMeet</a>
    <div className={styles.menu}>
        {/* <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}/>  */}
        {/* <img className={styles.menuBtn} src={menuOpen ? <IoMenu /> : ""} alt="mb"//menu-button
        onClick={() => setMenuOpen(!menuOpen)}/>  */}
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        //onclick menustyles will be implemented
        onClick={() => setMenuOpen(false)}>
            <li>
            <p><Link to='/Pricing'>Pricing</Link></p>
            </li>
            <li>
            <a> <Link to='/Platform'>Platform</Link></a>
            </li>
            <li>
            <a> <Link to='/Enterprise'>Enterprise</Link></a>
            </li>
            <li>
            <a> <Link to='/Features'>Features</Link></a>
            </li>
            <li>
            <a> <Link to='/Docs'>Docs</Link></a>
            </li>
            <li>
            <a> <Link to='/Blog'>Blog</Link></a>
            </li>
        </ul>
    </div>
    </nav>
  )
}
