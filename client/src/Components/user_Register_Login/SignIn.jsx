import React, { useState } from 'react'
import black_logo from "../images/blacklogoamazon.png";
import "./form.css";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setId } from '../Redux/action';

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [state, setState] = useState({})

  const handelInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    // console.log(state)
    const jsondata = await fetch("https://super-worm-sweatshirt.cyclic.app/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    });
    const data = await jsondata.json();
    const {token, userId, error} = data;
    if(error){
      toast.error(error);
    }
    if(token){
      localStorage.setItem("token", token);
      dispatch(setId(userId));
      navigate("/");
    }
  }

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={black_logo} alt="" />
        </div>
        <div className="sign_form">
          <form onSubmit={handelSubmit}>
            <h1>Sign-In</h1>
            <div className="form_data">
              <label>Email</label>
              <input onChange={(e) => { handelInput(e) }} type="text" name="email" id="email" required />
            </div>
            <div className="form_data">
              <label>Password</label>
              <input onChange={(e) => { handelInput(e) }} type="password" name="password" id="password" required />
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
      <ToastContainer  position="top-center" autoClose={2000} theme="dark" />
    </section>
  )
}

export default SignIn
