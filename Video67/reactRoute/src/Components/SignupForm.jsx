import React, { use, useState } from 'react';
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const SignupForm=({setIsLoggedIn})=>{
        const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""});
        const navigate = useNavigate();

        function changeHandler(event){
            setFormData((prevData) =>(
                {
                    ...prevData,[event.target.name] : event.target.value
                }
            ))
        }

        const [showPassword,setShowPassword] = useState(false);
        const[accountType,setAccountType] = useState("student");

        function submitHandler(event){
            event.preventDefault();
            if(formData.password !== formData.confirmPassword){
                toast.error("Passwords do not match");
                return;
            }
            setIsLoggedIn(true);
            toast.success("Account Created");
            navigate("/dashboard");
            console.log(formData);
        }
        

    return(
        <div className='mt-4 mb-4'>
                {/* Student Intstructor tab*/}
                
            <div className='flex bg-richblack-700 p-1 gap-x-4 rounded-full max-w-max'>
                <button onClick={() => setAccountType("student")} className={`${accountType === "student" ? "bg-richblack-900 text-richblack-50" :" bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Student
                </button>
                <button onClick={() => setAccountType("instructor")} className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-50" :" bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Instructor
                </button>

            </div>

            <form onSubmit={submitHandler}>
                
                {/* First Name and Last Name */}
                <div className='flex gap-x-4 my-4'>
                <label className="w-full relative">
            <p className="text-[1.2rem] text-white mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
                    <input type="text" placeholder='First Name' name='firstName' onChange={changeHandler} value={formData.firstName} className="bg-richblack-200 rounded-[0.5rem] w-full p-[10px]"/>
                </label>

                <label className="w-full relative">
            <p className="text-[1.2rem] text-white mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                    <input type="text" placeholder='Last Name' name='lastName' onChange={changeHandler} value={formData.lastName} className="bg-richblack-200 rounded-[0.5rem] w-full p-[10px]"/>
                </label>
            </div>
            
            {/* Email Address */}
            <label className="w-full relative my-4">
            <p className="text-[1.2rem] text-white mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
            <input required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id" name='email' className="bg-richblack-200 rounded-[0.5rem] w-full p-[10px]"/>
            </label>

            {/* create password and Confirm Password */}

            <div className='flex gap-x-4 mt-4'>

            <label className="w-full relative">
            <p className="text-[1.2rem] text-white mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
            <input required type={showPassword ? ("text"):("password")} value={formData.password} onChange={changeHandler} placeholder="Enter your password" name='password' className="bg-richblack-200 rounded-[0.5rem] w-full p-[10px]"/>

            
             <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-[38px] right-3 cursor-pointer">
             {
                 showPassword ? (<AiOutlineEye fontSize={24} fill="#000000"></AiOutlineEye>) :(<AiOutlineEyeInvisible fontSize={24} fill="#000000"></AiOutlineEyeInvisible>)
             }
            </span>

            </label>


            <label className="w-full relative ">
            <p className="text-[1.2rem] text-white mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
            <input required type={showPassword ? ("text"):("password")} value={formData.confirmPassword} onChange={changeHandler} placeholder="Confirm password" name='confirmPassword' className="bg-richblack-200 rounded-[0.5rem] w-full p-[10px]"/>

            
             <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-[38px] right-3 cursor-pointer">
                            {
                                showPassword ? (<AiOutlineEye fontSize={24} fill="#000000"></AiOutlineEye>) :(<AiOutlineEyeInvisible fontSize={24} fill="#000000"></AiOutlineEyeInvisible>)
                            }
            </span>

            </label>

  
            </div>

            {/* button */}

            <button className="bg-yellow-500 rounded-[8px] font-medium text-richblack-800 py-2 px-[12px] mt-4 w-full">
                Create Account
            </button>

            </form>

        </div>

    )

}

export default SignupForm;