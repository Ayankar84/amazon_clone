import { Avatar, Divider } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import flag_logo from "../images/india.png"
import "./rightheader.css"

const RightHeader = ({user, closedrawer}) => {
    const userId = useSelector((state)=>state.userId)
    return (
        <div className='rightheader'>
            <div className="right_nav">
                {userId && userId.length > 0 ? <Avatar className='avtar2'>{user && user.fname[0].toUpperCase()}</Avatar> : <Avatar className='avtar' />}
                {user ? <h3>{user.fname}</h3> : ""}
            </div>
            <div className="nav_btn">
                <Link to="/" onClick={closedrawer}>Home</Link>
                <Link to="/" onClick={closedrawer}>Shop By Category</Link>
                <Divider style={{"width": "100%", "marginLeft": "-20px"}} />
                <Link to="/" style={{ "marginTop": "14px" }} onClick={closedrawer} >Today's Deal</Link>
                <Link to="/cart" onClick={closedrawer}>Your Orders</Link>
                <Divider style={{"width": "100%", "marginLeft": "-20px"}} />
                <div className="flag">
                    <Link to="/" style={{ "marginTop": "14px" }} onClick={closedrawer} >Settings</Link>
                    <img src={flag_logo} alt="flag" style={{ "width": "35px", "marginLeft": "10px" }} />
                </div>
            </div>
        </div>
    )
}

export default RightHeader
