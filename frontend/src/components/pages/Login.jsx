import React, { useState } from 'react';
// import { supabase } from '../../client';
import { Link, useNavigate } from 'react-router-dom';
import  styles from "./Login.module.css";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { BsEyeSlash, BsEye } from 'react-icons/bs';


const Login = ({setToken}) => {
  
  let navigate = useNavigate()
// navigate to home using react-router-dom

  const [ showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };





  const collectData = () =>{
    console.log(email,password);

  }



  // const [formData, setFormData] = useState({
  //   email:'',password:''
  // })

  // console.log(formData)


  // function handleChange(event){
  //   setFormData((prevFormData)=>{
  //     return{
  //       ...prevFormData,
  //       [event.target.name]:event.target.value
  //     }
  //   })

  // }

  // async function handleSubmit(e){
  //   e.preventDefault()
  //   try {
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email: formData.email,
  //       password: formData.password,
  //     })
  //   if(error) throw error
  //   console.log(data)

  //   setToken(data)

  //     navigate('/Home')
    
  //   // alert('Check your email for verification link')
      
  //   } catch (error) {
  //     alert(error)
      
  //   }
  // }


  return (
    <div className={styles.wrapper}>

      <div className={styles.formBox}>

      {/* <form onSubmit={handleSubmit}> */}
      <form >

        <h1>Login</h1>

        <div className={styles.inputBox}>
        <input 
        type='text'
        placeholder='Email'
        name='email'
        // onChange={handleChange}
        /><FaEnvelope className={styles.icon} />
        </div>

        <div className={styles.inputBox}>
        <input 
        placeholder='Password'
        name='password'
        type={showPassword ? 'password' :'text'}
        // onChange={handleChange}
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

       <button  onClick={collectData} >Login</button>
      
      <div className={styles.registerLink}>
      <p>Don't have an account? <Link to='/Signup'>Signup</Link></p>
      </div>

      </form>

      </div>
    </div>
  )
}

export default Login