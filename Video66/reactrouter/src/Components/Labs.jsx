import React from "react";
import { useNavigate } from "react-router-dom";


const Labs=()=>{
    const navigate = useNavigate();
    
    function clickHandler(){
        // move to about Page
        navigate("/about");

    }
    function backHandler(){
        navigate(-1);
    }


    return(
        <div>
           <div>
           This is Labs Page
           </div>

           <button onClick={clickHandler} className="bg-green-400 rounded">Move to About Page</button>
           <br />
           <button onClick={backHandler} className="bg-green-400 rounded-sm mt-4 px-2">Go back</button>
        </div>
    )
}


export default Labs;