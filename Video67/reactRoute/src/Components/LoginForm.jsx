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
        <form onSubmit={submitHandler}>
            <label >
            <p>Email Address<sup>*</sup></p>
            <input required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id" name='email'/>
            </label>

            <label >
            <p>Password<sup>*</sup></p>
            <input required type={showPassword ? ("text") : ("password")} value={formData.password} onChange={changeHandler} placeholder="Enter your password" name='password'/>

            <span onClick={() => setShowPassword((prev) => !prev)}>
                {
                    showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :  (<AiOutlineEye></AiOutlineEye>)
                }
            </span>
            <Link to="#">Forgot Password</Link>
            </label>

             <br />
            <button>Sign in</button>

        </form>
    )
}

export default LoginForm;