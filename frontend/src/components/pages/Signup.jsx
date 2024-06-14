import React, { useEffect, useState } from 'react';
// import { supabase } from '../../client';
import { Link, useNavigate } from 'react-router-dom';
import  styles from "./Login.module.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { BsEyeSlash, BsEye } from 'react-icons/bs';

const Signup = () => {

  const navigate = useNavigate();


  useEffect(() =>{
    const auth= localStorage.getItem('user');
    if(auth){
     navigate('/')
    }
  })



  const [ showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
    

  async function collectData (e){
    e.preventDefault()

    try {
      console.log(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
      method:'post',
      body: JSON.stringify({name,email,password}),
      headers:{
        'content-Type':'application/json'
      },
    });
    result = await result.json()
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result));
    if(result){
      navigate('/');
    }
      
    } catch (error) {
      alert (error)
      
    }
    // if(result){
    //   navigate('/');
    // }

    // console.warn(name,email,password);
    // let result = await fetch('http://localhost:5000/register',{
    //   method:'post',
    //   body: JSON.stringify({name,email,password}),
    //   headers:{
    //     'content-Type':'application/json'
    //   },
    // });
    // result = await result.json()
    // console.warn(result);
    // localStorage.setItem("user",JSON.stringify(result));

  
    // if(result){
    //   navigate('/');
    // }

  }


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
  //     const { data, error } = await supabase.auth.signUp(
  //       {
  //         email: formData.email,
  //         password: formData.password,
  //         options: {
  //         data: {
  //           full_name: formData.fullName
  //             }
  //           } 
  //         }
  //       )
  //       if(error) throw error
  //       alert('Check your email for verification link')
      
  //   } catch (error) {
  //     alert(error)
      
  //   }
  // }



  // async function submit(e){
  //   e.preventDefault();

  //   try {

  //   await axios.post('http://localhost:5000/register',
  //     email,password,name
  //   )
      
  //   } catch (e) {
  //     console.log(e);
      
  //   }
  // }


  return (
    <div className={styles.wrapper}>

      <div className={styles.formBoxSignup}>

      {/* <form onSubmit={handleSubmit}> */}
      <form action='POST'>

        <h1>Sign Up</h1>

        <div className={styles.inputBox}>
        <input 
        type='text'  placeholder='Fullname'  
        value={name || ""}  onChange={(e)=>setName(e.target.value)}
        />
        <FaUser className={styles.icon}/>
        </div>

        <div className={styles.inputBox}>
        <input 
        type='text'   placeholder='Email'
        value={email || ""}  onChange={(e)=>setEmail(e.target.value)}
        />
        <FaEnvelope className={styles.icon}/>
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
        <label><input type='checkbox'/>I agree to the terms and conditions</label>
       </div>

       <button onClick={collectData} >Sign Up</button>

       <div className={styles.registerLink}>
      <p> Already have an account? <Link to='/Login'>Login</Link></p>
      </div>

      </form>
      
    </div>
    </div>
  )
}

export default Signup