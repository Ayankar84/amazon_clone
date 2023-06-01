import { useState } from 'react'
import black_logo from "../images/blacklogoamazon.png";
import "./form.css";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});

  const handelInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (state.password === state.cpassword) {
      const { fname, email, mobile, password } = state;
      const jsondata = await fetch("https://super-worm-sweatshirt.cyclic.app/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, email, mobile, password })
      })
      const userdata = await jsondata.json();
      // console.log(data);
      const { data, error } = userdata;
      if (data) {
        setTimeout(() => {
          navigate("/login");
        }, 3000)
        toast.success("User register Successfully");
      } else {
        toast.error(error);
      }

    } else {
      toast.warn("password and confirm password are not same")
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
            <h1>Create account</h1>
            <div className="form_data">
              <label htmlFor="fname">Your full name</label>
              <input onChange={(e) => { handelInput(e) }} required type="text" name="fname" id="fname" />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile</label>
              <input onChange={(e) => { handelInput(e) }} required type="number" name="mobile" id="mobile" />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input onChange={(e) => { handelInput(e) }} required type="text" name="email" id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input onChange={(e) => { handelInput(e) }} required type="password" name="password" id="password" />
            </div>
            <div className="form_data">
              <label htmlFor="passwordg">Confirm Password</label>
              <input onChange={(e) => { handelInput(e) }} required type="password" name="cpassword" id="passwordg" />
            </div>
            <button type='submit' className='signin_btn'>Continue</button>
            <div className="signin_info">
              <p>Already have an account?</p>
              <Link to="/login">Sign In</Link>
            </div>
          </form>
          <ToastContainer position="top-center" autoClose={2000} theme="dark" />
        </div>
      </div>
    </section>
  )
}

export default SignUp
