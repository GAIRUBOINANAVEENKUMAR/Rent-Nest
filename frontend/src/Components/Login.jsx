import React,{useState} from 'react'
import './Login.css';
const Login = () => {
  return (
    <>
    <h1>Login</h1>
     Email   :<input type='email' name='email' placeholder='Enter the your email'/><br></br>
     Password:<input type='password' name='password' placeholder='Enter your password'/><br></br>
              <button type='submit'>Login</button>
    </>
  )
}

export default Login;
