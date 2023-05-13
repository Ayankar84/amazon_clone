import React from 'react';
import "./newnavbar.css";
import nav_img from "../images/nav.jpg"


const NewNavbar = () => {
  return (
    <div className='new_nav'>
      <div className="nav_data">
        <div className="left_data">
          <p>All</p>
          <p>Mobile</p>
          <p>Bestseller</p>
          <p>Fashion</p>
          <p>Customer Services</p>
          <p>Elecronics</p>
          <p>Prime</p>
          <p>Today's deal</p>
          <p>Amazon pay</p>
        </div>
        <div className="right_data">
          <img src={nav_img} alt="navdata" />
        </div>
      </div>
    </div>
  )
}

export default NewNavbar
