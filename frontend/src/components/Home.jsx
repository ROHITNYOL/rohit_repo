import React, { useEffect } from 'react'
import { Navbar } from './Navbar/Navbar'
import { Header } from './Header/Header'
import { About } from './About/About'
import { AboutUs } from './AboutUs/AboutUs'
import styles from "./Home.module.css";
import Footer from './Footer/Footer';
import { ToastContainer, toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import axios from 'axios';


const Home = () => {


  // const navigate = useNavigate();
  // const [cookies, setCookie, removeCookie] = useCookies([]);
  // useEffect(() => {
  //   const verifyUser = async () => {
  //     if (!cookies.jwt) {
  //       navigate("/");
  //     } else {
  //       const { data } = await axios.post(
  //         "http://localhost:4000",
  //         {},
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       if (!data.status) {
  //         removeCookie("jwt");
  //         navigate("/");
  //       } else
  //         toast(`Hi ${data.user} 🦄`, {
  //           theme: "dark",
  //         });
  //     }
  //   };
  //   verifyUser();
  // }, [cookies, navigate, removeCookie]);




  return (
    <div className={styles.Home}>
    <Navbar/>
    <Header />
    <About/>
    <AboutUs/>
    <Footer/>
    {/* <ToastContainer/> */}
    </div>
  )
}

export default Home;