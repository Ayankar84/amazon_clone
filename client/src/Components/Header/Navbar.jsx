import React from 'react'
import "./navbar.css";
import amazon_img from "../images/amazon_PNG25.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        <Link to="/">
                            <img src={amazon_img} alt="" />
                        </Link>
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" />
                        <div className="search_icon">
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <Link to="/login">Sign in</Link>
                    </div>
                    <div className="cart_btn">
                        <Badge badgeContent={0} color="primary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <Avatar className='avtar' />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
