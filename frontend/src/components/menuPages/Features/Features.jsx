import React from 'react'
import { getImageUrl } from "../../../utils";
import styles from "./Features.module.css";
import Footer from '../../Footer/Footer';

function Features() {
  return (<>
    <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Features for everyone</h1>
        <p className={styles.description}>Features versatile enough for every use case, from end to end.</p>
        <p className={styles.description}>Join with us.</p>
        <p className={styles.description}>Features to fit your use case</p>
    </div>
    <img src={getImageUrl("features/features2.png")} alt="Header Image of Meet" className={styles.headerImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

</section>
<section className={styles.container2}>
      <span>
      <h2 className={styles.title2}>Everything you need in a scheduling app</h2>
      <div className={styles.content2}>
        <img
          src={getImageUrl("features/features3.png")}
          alt="Setting meetings"
          className={styles.aboutImage}
        />     
          <img
          src={getImageUrl("features/features4.png")}
          alt="Setting meetings"
          className={styles.aboutImage}
        /> 
          <img
          src={getImageUrl("features/features5.png")}
          alt="Setting meetings"
          className={styles.aboutImage}
        /> 
      </div>
      </span>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
       
          <div className={styles.aboutItemText}>
            <h3>Routing Forms</h3>
            <p>
            Route your information the way you need it to go, and process it in a way that makes the most sense for you and your organization.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
   
          <div className={styles.aboutItemText}>
            <h3>Workflows</h3>
            <p>
            A power feature that enables simple automation inside of Cal.com to send notifications and reminders enabling you to build processes around all your events.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
       
          <div className={styles.aboutItemText}>
            <h3>Recurring Events</h3>
            <p>
            Twice, three times, or as many times as you'd like. Recurring events makes it easy to pick a time and stick to a regular schedule that works for you.
            </p>
          </div>
        </li>
      </ul>
      
      <Footer/>
    </section>
   
</>
  )
}

export default Features