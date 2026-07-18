import React from "react";
import { useNavigate } from "react-router-dom";

const About=()=>{
    const navigate = useNavigate();
    
    function clickHandler(){
        // move to about Page
        navigate("/support");

    }
    return(
        <div>
        <div>
            This is About Page
        </div>

        <button onClick={clickHandler} className="bg-grey-400 ">Move to Support Page</button>

        </div>
    )
}


export default About;