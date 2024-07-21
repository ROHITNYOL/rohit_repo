import React from "react";
import styles from "./Blog.module.css";
import { getImageUrl } from "../../../utils";

function Blog() {
  return (
  <>
   <section className={styles.container}>
   <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.license}>Individuals</span>
          <h2>$0 i.e. FREE</h2>
          <span className={styles.duration}>/month</span>
          <p>Everything you need, forever free. Unlimited bookings, unlimited calendars, unlimited integrations. Upgrade at any time.</p>
          <button type='submit' className={styles.button}>Get Started</button>  
        </div>
        <ul className={styles.features}>
          
        </ul>
      </div>

    </section>
    </>
    
  );
}

export default Blog;
