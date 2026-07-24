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
        <div>
                {/* Student Intstructor tab*/}
                
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>

            </div>

            <form onSubmit={submitHandler}>
                
                {/* First Name and Last Name */}
                <div>
                <label >
                    <p>First Name <sup>*</sup></p>
                    <input type="text" placeholder='First Name' name='firstName' onChange={changeHandler} value={formData.firstName}/>
                </label>

                <label >
                    <p>Last Name <sup>*</sup></p>
                    <input type="text" placeholder='Last Name' name='lastName' onChange={changeHandler} value={formData.lastName}/>
                </label>
            </div>
            
            {/* Email Address */}
            <label >
            <p>Email Address<sup>*</sup></p>
            <input required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id" name='email'/>
            </label>

            {/* create password and Confirm Password */}

            <div>

            <label >
            <p>Create Password<sup>*</sup></p>
            <input required type={showPassword ? ("text"):("password")} value={formData.password} onChange={changeHandler} placeholder="Enter your password" name='password'/>

            
             <span onClick={() => setShowPassword((prev) => !prev)}>
                            {
                                showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :  (<AiOutlineEye></AiOutlineEye>)
                            }
            </span>

            </label>


            <label >
            <p>Confirm Password<sup>*</sup></p>
            <input required type={showPassword ? ("text"):("password")} value={formData.confirmPassword} onChange={changeHandler} placeholder="Confirm password" name='confirmPassword'/>

            
             <span onClick={() => setShowPassword((prev) => !prev)}>
                            {
                                showPassword ? (<AiOutlineEye></AiOutlineEye>) :(<AiOutlineEyeInvisible></AiOutlineEyeInvisible>)
                            }
            </span>

            </label>

  
            </div>

            {/* button */}

            <button>
                Create Account
            </button>

            </form>

        </div>

    )

}

export default SignupForm;