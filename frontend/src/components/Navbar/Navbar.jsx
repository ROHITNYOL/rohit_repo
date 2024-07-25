import React , { useState } from 'react';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { IoMenu } from "react-icons/io5";
import { Link} from 'react-router-dom';
import { useCookies } from "react-cookie";
import { ToastContainer, toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

axios.defaults.withCredentials = true;





export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);//usestate to track menu button is opening and closing


  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
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
