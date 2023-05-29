import React, { useEffect, useState } from 'react'
import "./navbar.css";
import amazon_img from "../images/amazon_PNG25.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeCart, logoutprocess, reset, setId } from '../Redux/action';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Menu, MenuItem } from '@mui/material';
import RightHeader from './RightHeader';
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {
    const navigate = useNavigate();
    let [user, setUser] = useState(null);
    let [dropen, setDropen] = useState(false);
    let token = localStorage.getItem("token") || null;
    const cartvalue = useSelector((state) => state.cart);
    const userId = useSelector((state) => state.userId);
    const dispatch = useDispatch()

    //menu part
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //menu part

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
        console.log(cartvalue, "test")
        if (!user && token) {
            getuser();
        }
        if (user) {
            getCart(user._id);
        }
    }, [user, userId, cartvalue])

    const closedrawer = () => {
        setDropen(false);
    }

    const logoutUser = () => {
        localStorage.removeItem("token");
        setUser(null)
        dispatch(reset({
            data: [],
            totalQty: 0
        }))
    }

    console.log(user)

    return (
        <header>
            <nav>
                <div className="left">

                    <IconButton className='hamburgur' onClick={() => { setDropen(true) }}>
                        <MenuIcon style={{ "color": "#fff" }} />
                    </IconButton>
                    <Drawer open={dropen} onClose={closedrawer}>
                        <RightHeader user={user} closedrawer={closedrawer} />
                    </Drawer>

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
                        {!userId || userId.length === 0 ? <Link to="/login">Sign in</Link> : <Link onClick={logoutUser} to="/" >LogOut</Link>}
                    </div>
                    <Link to="/cart">
                        <div className="cart_btn">
                            <Badge badgeContent={cartvalue.totalQty || 0} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                            <p>Cart</p>
                        </div>
                    </Link>
                    {userId && userId.length > 0 ?
                        <Avatar className='avtar2'
                            // id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {user && user.fname[0].toUpperCase()}
                        </Avatar>
                        : <Avatar className='avtar' />}
                    <Menu
                        // id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={() => {
                            logoutUser();
                            navigate("/");
                            handleClose();
                        }}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} /> LogOut</MenuItem>
                    </Menu>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
