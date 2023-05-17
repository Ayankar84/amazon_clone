import React, { useState } from 'react'
import black_logo from "../images/blacklogoamazon.png";
import "./form.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [state, setState] = useState({});

  const handelInput = (e)=>{
    setState({...state, [e.target.name]: e.target.value})
  }

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={black_logo} alt="" />
        </div>
        <div className="sign_form">
          <form onSubmit={(e)=>{e.preventDefault(); console.log(state)}}>
            <h1>Create account</h1>
            <div className="form_data">
              <label htmlFor="fname">Your full name</label>
              <input onChange={(e)=>{handelInput(e)}} required type="text" name="fname" id="fname" />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile</label>
              <input onChange={(e)=>{handelInput(e)}} required type="number" name="mobile" id="mobile" />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input onChange={(e)=>{handelInput(e)}} required type="text" name="email" id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input onChange={(e)=>{handelInput(e)}} required type="password" name="password" id="password" />
            </div>
            <div className="form_data">
              <label htmlFor="passwordg">Confirm Password</label>
              <input onChange={(e)=>{handelInput(e)}} required type="password" name="cpassword" id="passwordg" />
            </div>
            <button type='submit' className='signin_btn'>Continue</button>
            <div className="signin_info">
              <p>Already have an account?</p>
              <Link to="/login">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp
