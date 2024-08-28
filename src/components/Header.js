import { LOGO_URL } from "../utils/constants";
import {useState,useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export const Header = () => {

  const [btnName,setBtnName] = useState('Login')
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)
  // if no dependency array => useEffect is called on every render
  // if the dependency array is empty = [] => useEffect is called on only initial render(just once)
  // if dependency is [btnName] => useEffect is called everytime btnName is updated 
  useEffect(()=> {
    console.log('useEffect called')
  },[btnName])
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
          <img
            className="w-56"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"}</li>
           <li> <Link to="/"> Home </Link></li>
            <li className="px-4"> <Link to="/about-us">About Us </Link></li>
            <li className="px-4"><Link to="/contact-us">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery Shop</Link></li>
            <li className="px-4"><Link>Cart </Link></li>
            <button className="login" onClick={()=> btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;