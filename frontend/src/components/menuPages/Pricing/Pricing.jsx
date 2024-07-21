import React from 'react'
import styles from "./Pricing.module.css";
import { IoCheckmarkDoneOutline } from "react-icons/io5";


const Pricing = () => {
  return (
    <>

    <section className={styles.head}>
      <div className={styles.headContent}>
      <h2>Pricing</h2>
        <p>Simply based on your needs </p> 

      </div>


    </section>





    <section className={styles.container}>
      <div className={styles.content}>
      </div>

      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.license}>Individuals</span>
          <h2>$0 i.e. FREE</h2>
          <span className={styles.duration}>/month</span>
          <p>Everything you need, forever free. Unlimited bookings, unlimited calendars, unlimited integrations. Upgrade at any time.</p>
          <button type='submit' className={styles.button}>Get Started</button>
        </div>
        <ul className={styles.features}>
          <li>
          <IoCheckmarkDoneOutline />
          <a>1 user</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Hosted only</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Unlimited event types</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Microsoft Outlookr</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>CalDav</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>CalMeet Video</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Workflows</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>and many more exciting Apps</a>
          </li>
        </ul>
      </div>


      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.license}>Teams 🌟</span>
          <h2>$15</h2>
          <span className={styles.duration}>/month</span>
          <p>We work better in teams. Extend your workflows with round-robin and collective events and make advanced routing forms.
          </p>
          <button type='submit' className={styles.button}>Get Started</button>
        </div>
        <ul className={styles.features}>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Everything from Individuals</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>One Team</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Hosted only</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Unlimited event types</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Team Pages</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Round-Robin</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Collective Events</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Routing Forms</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Team Workflows</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Remove Branding</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Same day Email and Chat support</a>
          </li>
        </ul>
      </div>

      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.license}>Organizations</span>
          <h2>$45</h2>
          <span className={styles.duration}>/month</span>
          <p>Looking for the best scheduling tool for your entire organization? Organizations let you create subteams and be in control.</p>
          <button type='submit' className={styles.button}>Get Started</button>
        </div>
        <ul className={styles.features}>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Everything from Teams</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>SAML SSO and SCIM</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Organizations — 1 Parent Team and Unlimited Sub-Teams</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Organization Workflows and Routing Forms</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>yourcompany.cal.com subdomain</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Dedicated onboarding support</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Extensive Whitelabeling</a>
          </li>
          <li>
          <IoCheckmarkDoneOutline />
          <a>Priority Email, Chat and Phone support</a>
          </li>
        </ul>
      </div>

    </section>


    </>
 
  )
}

export default Pricing