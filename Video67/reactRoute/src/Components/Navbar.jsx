import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar=(props)=>{
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return(
        <div className="flex justify-between items-center w-11/12 max-w-290 py-4 mx-auto">

            <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav>
                <ul className="flex ml-5 mr-3 gap-x-6 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* now we will create four buttons */} 
            <div className="flex items-center gap-x-4">
                { !isLoggedIn &&
                    <Link to="/login"> <button className="bg-richblack-800 text-white py-[6px] px-3 rounded-lg border border-richblack-700">Login</button> </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup"> <button onClick={()=>{
                    }}  className="bg-richblack-800 text-white py-[6px] px-3 rounded-lg border border-richblack-700">Sign up</button> </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard" > <button className="bg-richblack-800 text-white py-[6px] px-3 rounded-lg border border-richblack-700">Dashboard</button> </Link>
                }
                { isLoggedIn &&
                    <Link to="/"> <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("logged out");
                    }} className="bg-richblack-800 text-white py-[6px]px-3 rounded-lg border border-richblack-700">Log out</button> </Link>
                }
            </div>


        </div>
    )
}

export default Navbar;