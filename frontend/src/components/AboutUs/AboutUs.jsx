import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./AboutUs.module.css";

export const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
        <span>
        <h4>About us</h4>
        <div className={styles.aboutUsLeft}>
        <img
          src={getImageUrl("about/aboutUsImage.png")}
          alt="settings" className={styles.aboutUsImage}
        /> 
        </div>
        </span>
        <div className={styles.aboutUsRight}>
            <h2>Let people book when it works for both of you</h2>
            <div className={styles.aboutUsRightItem}>
            <h2>Scheduling for your team</h2>
            <p>Round-Robin scheduling ensures even distribution of calls across your team. Collective availability makes it easy to book your team when everyone is available.</p>
            </div>
            <div className={styles.aboutUsRightItem}>
            <h2>Route bookers to the right person</h2>
            <p>Ensure every booker is connected to the right person with Routing Forms. Ask screening questions and automatically connect bookers to the right person, event or even to a link.</p>
            </div>
            <div className={styles.aboutUsRightItem}>
            <h2>Avoid meeting overload</h2>
            <p>Limit people from overbooking you on a weekly or daily basis. Put breathing room between meetings with buffers either side and prevent surprises with minimum notice periods.</p>
            </div>
        </div>      
    </div>
  );

};
