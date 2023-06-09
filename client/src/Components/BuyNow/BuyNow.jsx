import { Divider } from '@mui/material';
import React from 'react';
import "./buynow.css";
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import { useSelector, useDispatch } from 'react-redux';
import { changeCart } from '../Redux/action';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Empty from './Empty';
import { Link } from 'react-router-dom';


const BuyNow = () => {
  const dispatch = useDispatch()
  const { cart, userId } = useSelector((state) => state);
  console.log(cart)

  if (cart.data.length === 0) {
    return (
      <Empty />
    )
  }

  const changeQty = async (index, value) => {
    try {
      let temp = cart.data
      temp[index].qty = value * 1;

      const res = await fetch(`https://super-worm-sweatshirt.cyclic.app/user/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: temp })
      })
      await res.json();

      dispatch(changeCart({ ...cart, data: temp }))
    } catch (e) {
      console.log({ error: e.message });
    }
  }

  const confirmOrder = async () => {
    try {
      const res = await fetch(`https://super-worm-sweatshirt.cyclic.app/user/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: [] })
      })
      const info = await res.json();
      console.log(info);
      dispatch(changeCart({
        data: [],
        totalQty: 0
      }))
      toast.success("Order successfully placed");
    }catch(e){
      toast.error("Somthing wents wrong")
      console.log({ error: e.message });
    }
  }

  const deleteProduct = async (index) => {
    try {
      let temp = cart.data
      temp.splice(index, 1);

      const res = await fetch(`https://super-worm-sweatshirt.cyclic.app/user/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: temp })
      })
      const { data, error } = await res.json();

      if (data) {
        toast.success("Item deleted");
      } else if (error) {
        toast.error(error);
      }

      dispatch(changeCart({ ...cart, data: temp }))
    } catch (e) {
      console.log({ error: e.message });
    }
  }

  return (
    <div className='buynow_section'>
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className='leftbuyprice'>Price</span>
          <Divider />

          {cart.data.map((e, i) => {
            return (
              <>
                <div key={i} className="item_containert">
                  <Link to={`/product/${e.product.id}`}><img src={e.product.url} alt="" /></Link>
                  <div className="item_details">
                    <Link style={{ "textDecoration": "none", "color": "inherit" }} to={`/product/${e.product.id}`}><h3>{e.product.title.longTitle}</h3></Link>
                    <h3>{e.product.title.shortTitle}</h3>
                    <h3 className='diffrentprice'>₹{e.product.price.cost}.00</h3>
                    <p className='unusuall'>Usually dispatched in 8 dayes.</p>
                    <p>Eligible for FREE Shipping</p>
                    <img
                      src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                      alt="logo"
                    />
                    <Option val={e.qty} index={i} cngqty={changeQty} deletitem={deleteProduct} />
                  </div>
                  <h3 className='item_price'>₹{e.product.price.cost}.00</h3>
                </div>
                <Divider />
              </>
            )
          })}


          <Subtotal items={cart} />
        </div>
        <Right items={cart} confirmOrder={confirmOrder} />
      </div>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </div>
  )
}

export default BuyNow
