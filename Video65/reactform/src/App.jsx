import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const App =()=>{

  // const[firstName,setFirstName] = useState("");
  // const[lastName,setLastName] = useState("");

  // function changeFirstHandler(event){
  //   // console.log("Printing first name");
  //   // console.log(event.target.value);

  //   setFirstName(event.target.value);
  // }

  // function changeLastHandler(event){
  //   // console.log("Printing last name");
  //   // console.log(event.target.value);

  //   setLastName(event.target.value);
  // }


  // now we are creating objects

  const [formData,setFormData] = useState( { firstName: "",lastName: "", email:"", comment:"", isVisible:true, mode:"", favCar:""} );

  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData, [name] : type==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    // 
    console.log("Finaly printing the form data..........");
    console.log(formData);
 
  }

console.log(formData);
  
  return(
    <div className='flex items-center justify-center '>
      <form  onSubmit={submitHandler}>

        <input type="text" placeholder='first name'  
        onChange={changeHandler} name="firstName"
        value={formData.firstName} className="border-2 border-black"
        />


        <br />
        <br />
        <input type="text" placeholder='last name'  
        onChange={changeHandler} name="lastName"
        value={formData.lastName}/>


        <br />
        <br />
        <input type="email" placeholder='email'  
        onChange={changeHandler} name="email"
        value={formData.email} />
        <br />
        <br />
        <textarea name="comment"  rows={10} cols={30} placeholder='enter your comment here' value={formData.comment} onChange={changeHandler}></textarea>

        <br />

        <input type="checkbox" onChange={changeHandler} name='isVisible' id='isVisible' checked={formData.isVisible}  />
        <label htmlFor='isVisible'>Am i visible ?</label>

        <br />
        <br />


        <fieldset className="border-2 border-solid border-black p-4">
          <legend>Mode:</legend>

        <input type="radio" onChange={changeHandler} name='mode' value="Online-Mode" id='Online-Mode'  checked ={formData.mode==="Online-Mode"} />

        <label htmlFor="Online-Mode">Online Mode</label>

        <input type="radio" onChange={changeHandler} name='mode' value="Offline-Mode" id='Offline-Mode' checked ={formData.mode==="Offline-Mode"}/>

        <label htmlFor="Offline-Mode">Offline Mode</label>
        
        </fieldset>

        { /* dropdown */}

        <select name="favCar" id="favChar" onChange={changeHandler} value={formData.favCar}>
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
          <option value="Thar">Thar</option>
        </select>

          <label htmlFor="favCar">Tell me your favourite car</label>

        <button className="border-2 border-solid border-black p-2 bg-fuchsia-500" >Submit</button>


      </form>


  </div>
  )
}

export default App
