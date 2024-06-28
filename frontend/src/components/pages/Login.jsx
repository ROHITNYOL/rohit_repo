import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  styles from "./Login.module.css";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/userslice';




const Login = () => {
  
  let navigate = useNavigate()
// navigate to home using react-router-dom

  const [ showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  const[input, setInput] = useState({
    email:'',
    password:''
    })



    const dispatch = useDispatch();





    const sendRequest = async() => {
      const res = await axios.post('http://localhost:5000/api/login', {
        email: input.email,
        password: input.password
      }).catch(err => alert("Enter correct details"));

      const data = await res.data;
      return data;
    };


  const loginUser = (e) => {
    e.preventDefault();
    // send http request
    sendRequest()
    .then(() => dispatch(signIn()))
    .then(() => navigate("/"));
  }
    

  


  return (
    <div className={styles.wrapper}>

      <div className={styles.formBox}>

     
      <form onSubmit={loginUser}>

        <h1>Login</h1>

        <div className={styles.inputBox}>
        <input 
        type='text'   placeholder='Email'  value={input.email}  onChange={(e) => setInput({...input,email:e.target.value})} 
    
        />
        <FaEnvelope className={styles.icon}/>
        </div>

        <div className={styles.inputBox}>
        <input 
        type={showPassword ? 'password' :'text'}  placeholder='Password'  value={input.password}  onChange={(e) => setInput({...input,password:e.target.value})} 
   
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

      </div>
    </div>
  )
}

export default Login