import React, { useState } from "react";
import "./App.css";

const App =() =>{
  const [formData,setFormData] = useState({firstName:"" , lastName:"", email:"",country:"India", streetAddress:"",city:"",state:"",postalCode:"",comments:false,candidates:false,offers:false , pushNotifications:""})

  function changeHandler(event){
    const {name,value,checked,type} = event.target;
      setFormData((prev) =>(
        {...prev,[name] : type ==="checkbox" ? checked:value }
      ))

  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return(
    <div className="flex flex-col items-center mt-6 ">
      <form onSubmit={submitHandler} className="w-2/5">

      <label htmlFor="firstName">First Name</label>
      <br />
      <input type="text" placeholder="First Name" name="firstName" id="firstName" value={formData.firstName} onChange={changeHandler} className=" w-full border-2 border-black "/>

      <br />


      {/* last name */}

      <label htmlFor="lastName">Last Name</label>
      <br />
      <input type="text" placeholder="Last Name" name="lastName" id="lastName" value={formData.lastName} onChange={changeHandler} className=" w-full border-2 border-black "/>
      <br />

      {/* email */}

      <label htmlFor="email">Email Address: </label>
      <br />
      <input type="email" placeholder="Email" name="email" id="email" value={formData.email} onChange={changeHandler} className=" w-full border-2 border-black "/>
      <br />


      {/* country */}

      <label htmlFor="country">Country</label>
      <br />
      <select name="country" id="country" value={formData.country} onChange={changeHandler}>
        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>

      <br />

      {/* streetAddress */}

      <label htmlFor="streetAddress">Street Address:</label>
      <br />
      <input type="text" placeholder="Street Address:" name="streetAddress" id="streetAddress" value={formData.streetAddress} onChange={changeHandler} className=" w-full border-2 border-black "/>
      <br />

      {/* City */}

      <label htmlFor="city">City:</label>
      <br />
      <input type="text" placeholder="City:" name="city" id="city" value={formData.city} onChange={changeHandler} className=" w-full border-2 border-black "/>
      <br />

      {/* State */}

      
      <label htmlFor="state">State:</label>
      <br />
      <input type="text" placeholder="State:" name="state" id="state" value={formData.state} onChange={changeHandler} className=" w-full border-2 border-black "/>
      <br />


      {/* postal Code */}

      
      <label htmlFor="postalCode">PostalCode:</label>
      <br />
      <input type="text" placeholder="PostalCode:" name="postalCode" id="postalCode" value={formData.postalCode} onChange={changeHandler} className=" w-full border-2 border-black "/>
      <br />

      {/* byEmail */}

      <fieldset>
       <legend>By Email</legend>
        <div>
          <input type="checkbox"  id="comments" name="comments" checked={formData.comments} onChange={changeHandler}/>
          <label htmlFor="comments" className="px-2 ">Comments</label>
          <p>  Get notified when someones posts a comment on a posting</p>
        </div>
        <div>
        <input type="checkbox"  id="candidates" name="candidates" checked={formData.candidates} onChange={changeHandler}/>
        <label htmlFor="candidates" className="px-2">Candidates</label>
          <p>  Get notified when a candidate applies for a job.</p>
        </div>
        <div>
        <input type="checkbox"  id="offers" name="offers" checked={formData.offers} onChange={changeHandler}/>
        <label htmlFor="offers" className="px-2">Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer</p>
        </div>

      </fieldset>



      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your mobile phone.</p>


         <input type="radio" value="Everything" name="pushNotifications" id="pushEverything" onChange={changeHandler}/>
         <label htmlFor="pushEverything">EveryThing</label>
         <br />

         <input type="radio" value="Same as Email" name="pushNotifications" id="pushEmail" onChange={changeHandler}/>
         <label htmlFor="pushNotEmail">Same as Email</label>
          <br />

         <input type="radio" value="No Push Notification" name="pushNotifications" id="pushNothing" onChange={changeHandler}/>
         <label htmlFor="pushushNothing">No Push Notification</label>

      </fieldset>
      <br />
      <button className="bg-blue-400 rounded px-4 py-1" >Save</button>



      </form>
        

    </div>
  )
}

export default App;