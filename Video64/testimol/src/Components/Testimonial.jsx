import React from "react";
import Card  from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
import { useState } from "react";

const Testimonial =(props)=>{
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);

    function leftShiftHandler(){
        if(index==0){
            setIndex(4);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index==4){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
            setIndex(Math.floor(Math.random()*reviews.length));
    }


    return(
        <divc className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-4 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card reviews={reviews[index]}></Card>

            <div className="flex text-3xl mt-5 gap-3 text-violet-500 font-bold mx-auto">  
                <button  onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-600">
                <FiChevronLeft></FiChevronLeft>
                </button>

                <button  onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-600">
                <FiChevronRight></FiChevronRight>
                </button>


            </div>


            <div>
                <button  onClick={surpriseHandler} className=" bg-violet-500 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-4">
                Surprise me
                </button>
            </div>


        </divc>
    )
}

export default Testimonial;