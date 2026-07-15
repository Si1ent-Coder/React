import React from 'react';
import { GiPistolGun } from "react-icons/gi";

const Card =({course}) =>{
    return(
        <div>
           <div>
            <img src={course.image.url} />

                <div>
                    <button>
                    <GiPistolGun size={28} />
                    </button>
                </div>

            </div> 

            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>

        </div>
    )
}

export default Card;