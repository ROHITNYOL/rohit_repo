import React from 'react';
import styles from "./Header.module.css";
import { getImageUrl } from "../../utils";


export const Header = () => {


  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.welcomeUser}>Welcome to calmeet</h1>
            <h1 className={styles.title}>Scheduling infrastructure for everyone.</h1>
            <p className={styles.description}>Meet CalMeet.com, the event-juggling scheduler for everyone. Focus on meeting, not making meetings. Free for individuals.</p>
            <a href="mailto:ouremail@email.com" className={styles.contactBtn}>Contact Us</a>
        </div>
        <img src={getImageUrl("header/headerImage.png")} alt="Header Image of Meet" className={styles.headerImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
