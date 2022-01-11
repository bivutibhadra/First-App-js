

import React, {useState} from 'react';
import './App.css'
import Axios from 'axios'
// const mysql = require('mysql')

function App(){
const [fname,setFname]=useState('')
const [email,setEmail]=useState('')
const [fphone,setPhone]=useState('')
const [pass,setPass]=useState('')
const submitForm=()=>{
  
  Axios.post('http://localhost:3001/insert',{fastname: fname, email: email,phone:fphone, password: pass}).then((e)=>{
    console.log(e)
  }).catch((error)=>{
    console.log(error)
  })
}



  return(
<div className='App'>
<div className='form'>
<label>Name</label>
<input type="text" name="fname" placeholder='First Name' onChange={(e)=>{setFname(e.target.value)}}/><br/>
<label>Email</label>
<input type="text" name="email"placeholder='Your email'onChange={(e)=>{setEmail(e.target.value)}}/><br/>
<label>Phone</label>
<input type="text" name="fphone"placeholder='Your phone no'onChange={(e)=>{setPhone(e.target.value)}}/><br/>
<label>Password</label>
<input type="password"name="pass" placeholder='password'onChange={(e)=>{setPass(e.target.value)}}/><br/>
<button onClick={submitForm}>S U B M I T</button>
</div>
</div>
  );
}

export default App;