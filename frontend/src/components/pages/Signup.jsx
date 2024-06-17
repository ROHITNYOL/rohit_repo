import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  styles from "./Login.module.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import axios from 'axios';

const Signup = () => {

  const navigate = useNavigate();


  const [ showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  const[input, setInput] = useState({
    name:'',
    email:'',
    password:''
    })


    const sendRequest = async() => {
      const res = await axios.post('http://localhost:5000/api/signup', {
        name: input.name,
        email: input.email,
        password: input.password
      }).catch(err => console.log(err));

      const data = await res.data;
      return data;
    };


  const signInUser = (e) => {
    e.preventDefault();
    // send http request
    sendRequest().then(() => navigate('/Login'));
  }
    


   


  return (
    <div className={styles.wrapper}>

      <div className={styles.formBoxSignup}>

      <form onSubmit={signInUser}>

        <h1>Sign Up</h1>

        <div className={styles.inputBox}>
        <input 
        type='text'  placeholder='Fullname'  value={input.name} onChange={(e) => setInput({...input,name:e.target.value})}   
        />
        <FaUser className={styles.icon}/>
        </div>



        <div className={styles.inputBox}>
        <input 
        type='text'   placeholder='Email'   value={input.email} onChange={(e) => setInput({...input,email:e.target.value})} 
        />
        <FaEnvelope className={styles.icon}/>
        </div>



        <div className={styles.inputBox}>
        <input 
        type={showPassword ? 'password' :'text'}  placeholder='Password'  value={input.password} onChange={(e) => setInput({...input,password:e.target.value})} 
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
      <p> Already have an account? <Link to='/Login'>Login</Link></p>
      </div>

      </form>
      
    </div>
    </div>
  )
}

export default Signup