import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Header } from './Header/Header'
import { About } from './About/About'
import { AboutUs } from './AboutUs/AboutUs'
import styles from "./Home.module.css";
import Footer from './Footer/Footer'


const Home = ({token}) => {
  return (
    <div className={styles.Home}>
    <Navbar/>
    <Header />
    <About/>
    <AboutUs/>
    <Footer/>
    </div>
  )
}

export default Home;