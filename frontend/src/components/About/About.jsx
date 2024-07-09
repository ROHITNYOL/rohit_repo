import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <span>
      <h2 className={styles.title}>Everything you need in a scheduling app</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Setting meetings"
          className={styles.aboutImage}
        />     
      </div>
      </span>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          {/* <img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon1" /> */}
          <div className={styles.aboutItemText}>
            <h3>A tailored link ready for every scenario</h3>
            <p>
              Set availability, location, duration and more on a per-link basis.
              Send bookings to different calendars or set a default.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          {/* <img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon2" /> */}
          <div className={styles.aboutItemText}>
            <h3>Connect all your calendars</h3>
            <p>
              CalMeet.com checks for conflicts across all of your calendars and
              only offers times that are open. Never get double booked again.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          {/* <img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon3" /> */}
          <div className={styles.aboutItemText}>
            <h3>Workflow automation</h3>
            <p>
              CalMeet.com enables you to build processes around your events.
              Notifications, reminders and follow ups are automatically taken
              care of.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
