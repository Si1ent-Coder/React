import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm=()=>{
    const [formData,setFormData]= useState({email:"",password:""});

    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,[event.target.name] : event.target.value
            }
        ));
    }
    
    const [showPassword,setShowPassword]  = useState(false);

    return(
        <form action="">
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

            <button>Sign in</button>

        </form>
    )
}

export default LoginForm;