import React from 'react'
import styles from "./Footer.module.css";
import { MdSecurity } from "react-icons/md";
import { FaCcPaypal,  FaKickstarterK, FaGoogle, FaFacebook, FaGithub, FaDiscord } from "react-icons/fa";
import { BiLogoBaidu } from "react-icons/bi";
import { FaIndianRupeeSign, FaXTwitter } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";


const Footer = () => {
  return (
    <section className={styles.footer}>
        <div className={styles.content}>
            <h2>CalMeet</h2>
            <p>CalMeet.com is a registered trademark by CalMeet.com, inc. All rights reserved.</p>

            <div className={styles.icons}>
                <ul>
                    <MdSecurity /> <FaCcPaypal /> <FaIndianRupeeSign /> <BiLogoBaidu /> <FaKickstarterK />
                </ul>
                <ul>
                    <FaGoogle /> <FaFacebook /> <FaGithub /> <FaDiscord /> <FaXTwitter />
                </ul>
            </div>

            <p>Our mission is to connect a billion people by 2023 through scheduling.</p>
            <IoLanguage /> <p>ENGLISH</p>
        </div>

        <div className={styles.footerItem}>
        <h3>SOLUTIONS</h3>
        <h4>Self-hosted</h4> <h4>Docs</h4> <h4>Enterprise</h4> <h4>platform</h4> <h4>FAQ</h4>
        <h4>Git-Hub</h4> <h4>Docker</h4> <h4>Unified API</h4> 
        </div>

        <div className={styles.footerItem}>
        <h3>USE CASES</h3>
        <h4>Recruiting</h4> <h4>Sales Team</h4> <h4>Education</h4> <h4>Hiring Marketplace</h4> <h4>Telehealth</h4>
        </div>

        <div className={styles.footerItem}>
        <h3>RESOURCES</h3>
        <h4>Blog</h4> <h4>Merch Store</h4> <h4>Open Startup</h4> <h4>Teams</h4> <h4>Embed</h4>
        <h4>Recurring events</h4> <h4>Developers</h4> <h4>Routing Forms</h4> <h4>Workflows</h4>
        </div>

        <div className={styles.footerItem}>
        <h3>COMPANY</h3>
        <h4>Jobs</h4> <h4>About</h4> <h4>Support</h4> <h4>Privacy</h4> <h4>Terms</h4>
        <h4>License</h4> <h4>Security</h4> <h4>Changelog</h4> 
        </div>



    </section>
  )
}

export default Footer