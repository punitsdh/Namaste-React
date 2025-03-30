import { LOGO_URL } from "./utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-slate-100 shadow-xl">   
            <div>
                <img className="p-2 m-2 size-36" src = {LOGO_URL}/> 
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 text-lg font-medium">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4 text-lg font-medium hover:text-orange-600">
                        <Link to= "/">Home</Link>
                    </li>
                    <li className="px-4 text-lg font-medium hover:text-orange-600">
                        <Link to= "/about">About Us</Link>
                    </li>
                    <li className="px-4 text-lg font-medium hover:text-orange-600">
                        <Link to= "/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 text-lg font-medium hover:text-orange-600">
                        <Link to= "/cart">Cart - ({cartItems.length} items)</Link>    
                    </li>
                    <button className="px-4 text-lg font-medium hover:text-orange-600"
                    onClick={() => {
                        btnNameReact ==="Login" ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}>
                    {btnNameReact}
                    </button>

                    <li className="px-4 text-lg font-bold"> { loggedInUser }</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;