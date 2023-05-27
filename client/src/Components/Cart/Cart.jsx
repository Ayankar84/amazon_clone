import { useEffect, useState } from 'react';
import { Divider } from "@mui/material";
import "./cart.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeCart } from '../Redux/action';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    var { cart, userId } = useSelector((state) => state);
    const dispatch = useDispatch();
    // console.log(cart);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const jsondata = await fetch(`/products/${id}`);
                const data = await jsondata.json();
                setProduct(data.data);
                // console.log(data.data);
            } catch (e) {
                console.log({ error: e.message });
            }
        }
        getProduct();

    }, [id])

    const AddToCart = async () => {
        try {
            let temp = cart.data;
            const info = {
                product,
                qty: 1
            }

            if (temp.length === 0) {
                temp.push(info)
            } else {
                let index = -1
                temp.map((e, i) => {
                    if (e.product.id === product.id) {
                        index = i;
                    }
                })

                if (index >= 0) {
                    temp[index].qty++
                } else {
                    temp.push(info)
                }
            }

            const res = await fetch(`/user/${userId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cart: temp })
            })

            const jsonres = await res.json();
            const { data, error } = jsonres

            if(data){
                toast.success("Item Added to cart");
            }else if(error){
                toast.error(error);
            }

            dispatch(changeCart({ ...cart, data: temp }))

            // console.log(cart);
        } catch (e) {
            console.log({ error: e.message })
        }
    }

    console.log(cart, userId);

    const date = new Date();
    const month_list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = month_list[date.getMonth()];
    const day = date.getDate();
    if (!product) {
        return (<></>);
    }
    return (
        <div className='cart_section'>
            <div className="cart_container">
                <div className="left_cart">
                    <img
                        src={product && product.detailUrl}
                        alt="product"
                    />
                    <div className="cart_btn">
                        <button onClick={AddToCart} className='cart_btn1'>Add to Cart</button>
                        <button className='cart_btn2' onClick={async ()=>{
                            await AddToCart();
                            navigate("/cart")
                        }}>Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>{product && product.title.shortTitle}</h3>
                    <h4>{product && product.title.longTitle}</h4>
                    <Divider />
                    <p className='mrp'>M.R.P. : <span style={{ "textDecoration": "line-through" }}>₹{product && product.price.mrp}</span></p>
                    <p>Deal of the Day : <span style={{ "color": "#B12704" }}> ₹{product && product.price.cost} </span></p>
                    <p>You save : <span style={{ "color": "#B12704" }}> ₹{product && (product.price.mrp - product.price.cost)} ({product && product.price.discount}) </span></p>

                    <div className="discount_box">
                        <h5>Discount : <span style={{ color: "#111" }}>{product && product.discount}</span></h5>
                        <h4>Free Delivery : <span style={{ color: "#111", fontWeight: "600" }}>{month} {day + 2} - {day + 5}</span> Details</h4>
                        <p style={{ color: "#111" }}>Fastest delevery: <span style={{ color: "#111", fontWeight: "600" }}>Tomorrow 11AM</span></p>
                    </div>
                    <p className="description"> About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>
                        {product && product.description}
                    </span></p>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={2000} theme="dark" />
        </div>
    )
}

export default Cart
