import React, {  useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  styles from "./Login.module.css";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';







const Login = () => {
  



  const [ showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };





  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/Home");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/Home");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
    

  


  return (
    <div className={styles.wrapper}>

      <div className={styles.formBox}>

     
      <form onSubmit={(e) => handleSubmit(e)}>

        <h1>Login</h1>

        <div className={styles.inputBox}>
        <input 
           type="email"
           name="email"
           placeholder="Email"
           onChange={(e) =>
             setValues({ ...values, [e.target.name]: e.target.value })
           }
    
        />
        <FaEnvelope className={styles.icon}/>
        </div>

        <div className={styles.inputBox}>
        <input 
        type={showPassword ? 'password' :'text'}  placeholder='Password'  name="password"   onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
   
       />
        <div className={styles.iconWrapper}>
        {showPassword ? (
          <BsEyeSlash onClick={handleShowPassword} />
        ) : (
          <BsEye onClick={handleShowPassword} />
        )}

       </div>
       <FaLock className={styles.icon}/>
       </div>


       <div className={styles.rememberForgot}>
        <label><input type='checkbox'/>Remember me</label>
        <a href='#'>Forgot password?</a>
       </div>

       <button  type='submit' >Login</button>
      
      <div className={styles.registerLink}>
      <p>Don't have an account? <Link to='/Signup'>Signup</Link></p>
      </div>

      </form>
      <ToastContainer/>

      </div>
    </div>
  )
}

export default Login