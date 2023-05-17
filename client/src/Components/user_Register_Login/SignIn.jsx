import React, { useState } from 'react'
import black_logo from "../images/blacklogoamazon.png";
import "./form.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [state, setState] = useState({})

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
            <h1>Sign-In</h1>
            <div className="form_data">
              <label>Email</label>
              <input onChange={(e)=>{handelInput(e)}} type="text" name="email" id="email" required/>
            </div>
            <div className="form_data">
              <label>Password</label>
              <input onChange={(e)=>{handelInput(e)}} type="password" name="password" id="password" required/>
            </div>
            <button type='submit' className='signin_btn'>Continue</button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New to Amazon</p>
          <Link to="/register">
            <button>Create your amazon account</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SignIn
