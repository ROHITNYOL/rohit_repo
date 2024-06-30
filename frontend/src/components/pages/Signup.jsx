import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  styles from "./Login.module.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {



  const [ showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  // const[input, setInput] = useState({
  //   name:'',
  //   email:'',
  //   password:''
  //   })


  //   const sendRequest = async() => {
  //     const res = await axios.post('http://localhost:5000/api/signup', {
  //       name: input.name,
  //       email: input.email,
  //       password: input.password
  //     }).catch(err => console.log(err));

  //     const data = await res.data;
  //     return data;
  //   };


  // const signInUser = (e) => {
  //   e.preventDefault();
  //   // send http request
  //   sendRequest().then(() => navigate('/Login'));
  // }


  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/Home");
    }
  }, [cookies, navigate]);



  const [values, setValues] = useState({ name: "", email: "", password: "" });
    
  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
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

      <div className={styles.formBoxSignup}>

      <form onSubmit={(e) => handleSubmit(e)}>

        <h1>Sign Up</h1>

        <div className={styles.inputBox}>
        <input 
          type="text"
          placeholder="Fullname"
          name="name"
          onChange={(e) => setValues({...values,[e.target.name]: e.target.value})}   
        />
        <FaUser className={styles.icon}/>
        </div>



        <div className={styles.inputBox}>
        <input 
           type="email"
           name="email"
           placeholder="Email"
           onChange={(e) =>
             setValues({ ...values, [e.target.name]: e.target.value }) }
        />
        <FaEnvelope className={styles.icon}/>
        </div>



        <div className={styles.inputBox}>
        <input 
        type={showPassword ? 'password' :'text'}  placeholder='Password'  name="password" onChange={(e) =>
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
        <label><input type='checkbox'/>I agree to the terms and conditions</label>
       </div>

       <button type='submit' >Sign Up</button>

       <div className={styles.registerLink}>
      <p> Already have an account? <Link to='/'>Login</Link></p>
      </div>
    

      </form>
      <ToastContainer/>
      
    </div>
   
    </div>
  )
}

export default Signup