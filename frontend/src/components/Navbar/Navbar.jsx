import React , { useState, useEffect} from 'react';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { IoMenu } from "react-icons/io5";
import { Link} from 'react-router-dom';
import { useCookies } from "react-cookie";
import { ToastContainer, toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

axios.defaults.withCredentials = true;



// import  { useContext } from "react";
// import AuthContext from '../context/AuthContext';




export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);//usestate to track menu button is opening and closing


    // const { getLoggedIn } = useContext(AuthContext);
    // const { loggedIn } = useContext(AuthContext);


    // const sendLogoutReq = async() => {
    //   const res = await axios.post('http://localhost:5000/api/logout', null, {
    //     withCredentials: true
    //   });
    //   if(res.status == 200){
    //     return res
    //   }
    //   return new Error("Unable to Logout. Please try again")

     
    // };


    // const logoutUser = () => {
    //   sendLogoutReq()
    //   .then(() => getLoggedIn())
    // .then(() => navigate("/"));
    // };


   



  // const [user, setUser] = useState();


  // const refreshToken = async() => {
  //   const res = await axios.get('http://localhost:5000/api/refresh', {
  //     withCredentials: true,
  //   }).catch(err => console.log(err));

  //   const data = await res.data;
  //   return data;
  // }



  // const sendRequest = async() => {
  //   const res = await axios.get('http://localhost:5000/api/user', {
  //     withCredentials: true,
  //   }).catch(err => console.log(err));
      
  //   const data = await res.data;
  //   return data;
  // }

  // useEffect(() => {
  //   if(firstRender){
  //     firstRender = false
  //     sendRequest().then((data) => setUser(data.user))
  //   }

  //   let interval = setInterval(() => {
  //     refreshToken().then(data => setUser(data.user))
  //   }, 1000 * 28);

  //   return () => clearInterval(interval)

  // }, [])

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/");
  };




  return (<>
    <nav className={styles.navbar}>
    <a className={styles.title} >CalMeet</a>
    <div className={styles.menu}>
        {/* <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}/>  */}
        {/* <img className={styles.menuBtn} src={menuOpen ? <IoMenu /> : ""} alt="mb"//menu-button
        onClick={() => setMenuOpen(!menuOpen)}/>  */}
        {/* onClick={() => setMenuOpen(false)} */}
        
         
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
            <li>
            <p><Link to='/Pricing'>Pricing</Link></p>
            </li>
            <li>
            <a> <Link to='/Platform'>Platform</Link></a>
            </li>
            <li>
            <a> <Link to='/Enterprise'>Enterprise</Link></a>
            </li>
            <li>
            <a> <Link to='/Features'>Features</Link></a>
            </li>
            <li>
            <a> <Link to='/Docs'>Docs</Link></a>
            </li>
            <li>
            <a> <Link to='/Blog'>Blog</Link></a>
            </li>
            <button  onClick={logOut} className={styles.logout}><Link to='/Signup' >Logout</Link></button> 
            </ul>
         
        
    </div>
    
    </nav>
    <ToastContainer/>
    </>
  )
}
