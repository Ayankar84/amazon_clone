import { Route, Routes } from "react-router-dom"
import HomePage from "../Home/HomePage"
import SignUp from "../user_Register_Login/SignUp"
import SignIn from "../user_Register_Login/SignIn"
import Cart from "../Cart/Cart"
import BuyNow from "../BuyNow/BuyNow"
import PrivateComponent from "../PrivateComponents/PrivateComponent"

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/product/:id" element={<Cart />} />
      <Route path="/cart" element={<PrivateComponent><BuyNow /></PrivateComponent>} />
    </Routes>
  )
}

export default Allroutes
