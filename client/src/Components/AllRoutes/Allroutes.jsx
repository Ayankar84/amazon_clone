import {Route, Routes} from "react-router-dom"
import HomePage from "../Home/HomePage"
import SignUp from "../user_Register_Login/SignUp"
import SignIn from "../user_Register_Login/SignIn"

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}

export default Allroutes
