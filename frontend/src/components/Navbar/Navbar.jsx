import React , {useEffect, useState} from 'react';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { IoMenu } from "react-icons/io5";
import { Link, Navigate, useNavigate} from 'react-router-dom';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
axios.defaults.withCredentials = true;

let firstRender = true;



export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);//usestate to track menu button is opening and closing


    const navigate = useNavigate;


    const dispatch = useDispatch();

  
    const isLoggedIn = useSelector(state => state.isLoggedIn);


    const sendLogoutReq = async() => {
      const res = await axios.post('http://localhost:5000/api/logout', null, {
        withCredentials: true
      });
      if(res.status == 200){
        return res
      }
      return new Error("Unable to Logout. Please try again")
    };


    const logoutUser = () => {
      sendLogoutReq().then(() => dispatch(signOut()));
    };







  return (
    <nav className={styles.navbar}>
    <a className={styles.title} >CalMeet</a>
    <div className={styles.menu}>
        {/* <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}/>  */}
        {/* <img className={styles.menuBtn} src={menuOpen ? <IoMenu /> : ""} alt="mb"//menu-button
        onClick={() => setMenuOpen(!menuOpen)}/>  */}
        {/* onClick={() => setMenuOpen(false)} */}
        
          {/* {user ? */}
          {isLoggedIn ?
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
            <button onClick={logoutUser} className={styles.logout}><Link to='/Signup' >Logout</Link></button> 
            </ul>
            :
            <button  className={styles.Signup}><Link to ='/Signup'>Signup</Link></button>} 
        
    </div>
    </nav>
  )
}
