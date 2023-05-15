import React from 'react'
import black_logo from "../images/blacklogoamazon.png";
import "./form.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={black_logo} alt="" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button className='signin_btn'>Continue</button>
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
