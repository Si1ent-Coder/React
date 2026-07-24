import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import Template from "../components/Template";
import signupImg from "../assets/signup.png";

const Signup=({ setIsLoggedIn })=>{
    return(
        <Template
        title="Join the millions learning to code with StudyNotion for free!"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    )
}

export default Signup;