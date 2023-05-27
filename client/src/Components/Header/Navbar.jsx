import React, { useEffect, useState } from 'react'
import "./navbar.css";
import amazon_img from "../images/amazon_PNG25.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeCart, setId } from '../Redux/action';

const Navbar = () => {
    let [user, setUser] = useState(null)
    let token = localStorage.getItem("token") || null;
    const cartvalue = useSelector((state) => state.cart);
    const userId = useSelector((state) => state.userId);
    const dispatch = useDispatch()

    useEffect(() => {
        const getuser = async () => {
            try {
                let res = await fetch("/user", {
                    headers: { Authorization: `Bearer ${token}` }
                })
                let userinfo = await res.json()
                setUser(userinfo.user)
            } catch (e) {
                console.log({ error: e.message });
            }
        }

        const getCart = async (id) => {
            try {
                dispatch(setId(id));
                const jsondata = await fetch(`/user/${id}`);
                const data = await jsondata.json();
                const { cart } = data;
                let val = 0;
                if (cart.length > 0) {
                    cart.map((e) => {
                        val += e.qty;
                    })
                }
                if (val != cartvalue.totalQty) {
                    console.log("test condition");
                    dispatch(changeCart({
                        ...cartvalue,
                        data: cart,
                        totalQty: val
                    }))
                }
            } catch (e) {
                console.log({ error: e.message });
            }
        }
        // console.log(cartvalue, "test")
        if (!user && token) {
            getuser();
        }
        if (user) {
            getCart(user._id);
        }
    }, [user, cartvalue, userId])

    console.log(user)

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
                    <Link to="/cart">
                        <div className="cart_btn">
                            <Badge badgeContent={cartvalue.totalQty} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                            <p>Cart</p>
                        </div>
                    </Link>
                    {userId && userId.length>0 ? <Avatar className='avtar2'>{user && user.fname[0].toUpperCase()}</Avatar> : <Avatar className='avtar' /> }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
