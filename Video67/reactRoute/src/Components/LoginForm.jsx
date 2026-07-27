import React from "react";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import toast from "react-hot-toast";

const LoginForm=({setIsLoggedIn})=>{
    const [formData,setFormData]= useState({email:"",password:""});
    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,[event.target.name] : event.target.value
            }
        ));
    }
    
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    const [showPassword,setShowPassword]  = useState(false);

    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full relative">
            <p className="text-[1.2rem] text-white mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
            <input required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id" name='email' className="bg-richblack-200 rounded-[0.5rem] w-full p-[10px]"/>
            </label>

            <label className="w-full relative">
            <p className="text-[1.2rem] text-white mb-1 leading-[1.375rem]">Password<sup className="text-pink-200">*</sup></p>
            <input required type={showPassword ? ("text") : ("password")} value={formData.password} onChange={changeHandler} placeholder="Enter your password" name='password' className="bg-richblack-200 rounded-[0.5rem] w-full p-[10px]"/>

            <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-[38px] right-3 cursor-pointer">
                {
                    showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#000000"></AiOutlineEyeInvisible >) :  (<AiOutlineEye fontSize={24} fill="#000000"></AiOutlineEye>)
                }
            </span>
            <Link to="#"> 
            <p className="text-xs mt-1 text-blue-400 max-w-max ml-auto">Forgot Password
            </p>
            </Link>
            </label>

            <button className="bg-yellow-500 rounded-[8px] font-medium text-richblack-800 py-2 px-[12px] mt-3">Sign in</button>

        </form>
    )
}

export default LoginForm;