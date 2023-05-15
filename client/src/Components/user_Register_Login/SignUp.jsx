import React from 'react'
import black_logo from "../images/blacklogoamazon.png";
import "./form.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={black_logo} alt="" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Create account</h1>
            <div className="form_data">
              <label htmlFor="fname">Your full name</label>
              <input type="text" name="fname" id="fname" />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile</label>
              <input type="text" name="mobile" id="mobile" />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="form_data">
              <label htmlFor="passwordg">Confirm Password</label>
              <input type="password" name="cpassword" id="passwordg" />
            </div>
            <button className='signin_btn'>Continue</button>
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
