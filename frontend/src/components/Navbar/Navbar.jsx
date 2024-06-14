import React , {useEffect, useState} from 'react';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { IoMenu } from "react-icons/io5";
import { Link, Navigate, useNavigate} from 'react-router-dom';



export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);//usestate to track menu button is opening and closing

    const auth = localStorage.getItem('user');

    const navigate = useNavigate();

    const logout =()=>{
      localStorage.clear();
      navigate('/Signup');
    }





  return (
    <nav className={styles.navbar}>
    <a className={styles.title} >CalMeet</a>
    <div className={styles.menu}>
        {/* <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}/>  */}
        {/* <img className={styles.menuBtn} src={menuOpen ? <IoMenu /> : ""} alt="mb"//menu-button
        onClick={() => setMenuOpen(!menuOpen)}/>  */}
        {/* onClick={() => setMenuOpen(false)} */}
          {auth ?
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
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
            <button  className={styles.logout}><Link onClick={logout} to='/Signup' >Logout ({JSON.parse(auth).name})</Link></button> 
            </ul>
            :
            <button  className={styles.Signup}><Link to ='/Signup'>Signup</Link></button>} 
        
    </div>
    </nav>
  )
}
