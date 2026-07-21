import React, { useState } from 'react';
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm=()=>{
        const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""});

        function changeHandler(event){
            setFormData((prevData) =>(
                {
                    ...prevData,[event.target.name] : event.target.value
                }
            ))
        }

        const [showPassword,setShowPassword] = useState(false);

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

            <form>
                
                {/* First Name and Last Name */}
                <div>
                <label >
                    <p>First Name <sup>*</sup></p>
                    <input type="text" placeholder='First Name' name='firstname' onChange={changeHandler} value={FormData.firstName}/>
                </label>

                <label >
                    <p>Last Name <sup>*</sup></p>
                    <input type="text" placeholder='Last Name' name='lastname' onChange={changeHandler} value={FormData.lastName}/>
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
                                showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :  (<AiOutlineEye></AiOutlineEye>)
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