import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  styles from "./Login.module.css";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { BsEyeSlash, BsEye } from 'react-icons/bs';


const Login = () => {
  
  const navigate = useNavigate()
// navigate to home using react-router-dom

  const [ showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };


    //so useEffect with the help of useNavigate() hook rerenders the page and when auth is their, it does not allow to redirect at login page.
  useEffect(() =>{ 
    const auth= localStorage.getItem('user');
    if(auth){
     navigate('/');
    }
  })


  const [password, setPassword] = useState();
  const [email, setEmail] = useState();


    // const handleLogin = async() =>{
    //   console.log(email,password);
    // }


    async function handleLogin (e){
      e.preventDefault()
      
      try {
        console.log(email,password);
        let result = await fetch('http://localhost:5000/login',{
          method:'post',
          body: JSON.stringify({email,password}),
          headers:{
            'content-Type':'application/json'
          },
        });
        result = await result.json()
        console.log(result);
        if(result.name){
          localStorage.setItem("user",JSON.stringify(result));
          navigate("/")

        }
        else{
          alert("please enter correct details")
        }
        
      } catch (error) {
        alert(error)
        
      }


    }
  

  return (
    <div className={styles.wrapper}>

      <div className={styles.formBox}>

     
      <form >

        <h1>Login</h1>

        <div className={styles.inputBox}>
        <input 
        type='text'   placeholder='Email'
        value={email || ""}  onChange={(e)=>setEmail(e.target.value)}
        />
        <FaEnvelope className={styles.icon} />
        </div>

        <div className={styles.inputBox}>
        <input 
        type={showPassword ? 'password' :'text'}  placeholder='Password'
        value={password || ""}  onChange={(e)=>setPassword(e.target.value)}
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

       <button  onClick={handleLogin} >Login</button>
      
      <div className={styles.registerLink}>
      <p>Don't have an account? <Link to='/Signup'>Signup</Link></p>
      </div>

      </form>

      </div>
    </div>
  )
}

export default Login