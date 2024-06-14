import React from 'react';
import styles from "./Header.module.css";
import { getImageUrl } from "../../utils";
import { Link, useNavigate } from "react-router-dom";


export const Header = ({token}) => {

  let navigate = useNavigate()

  function handleLogout(){
    sessionStorage.removeItem('token')  
    navigate('/') 
  }


  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.welcomeUser}>Welcome to calmeet</h1>
        <button onClick={handleLogout} className={styles.logout}>Logout</button>
            <h1 className={styles.title}>Scheduling infrastructure for everyone.</h1>
            <p className={styles.description}>Meet CalMeet.com, the event-juggling scheduler for everyone. Focus on meeting, not making meetings. Free for individuals.</p>
            {/* <a href="mailto:ouremail@email.com" className={styles.contactBtn}>Contact Us</a> */}
            <a href="mailto:ouremail@email.com" className={styles.contactBtn}>Contact Us</a>
            {/* <Link to='/Signup'>Signup</Link>
            <Link to='/'>Login</Link> */}
        </div>
        <img src={getImageUrl("header/headerImage.png")} alt="Header Image of Meet" className={styles.headerImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
