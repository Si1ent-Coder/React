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

  const [formData,setFormData] = useState( { fistName: "",lastName: "", email:""} );

  function changeHandler(event){
    setFormData(prevFormData => {
      return {
        ...prevFormData, [event.target.name] : event.target.value
      }
    });
  }
  
  return(
    <div className='flex items-center justify-center'>
      <form action="">

        <input type="text" placeholder='first name'  
        onChange={changeHandler} name="firstName"/>


        <br />
        <br />
        <input type="text" placeholder='last name'  
        onChange={changeHandler} name="lastName"/>
        <br />
        <br />
        <input type="email" placeholder='email'  
        onChange={changeHandler} name="email"/>

      </form>


  </div>
  )
}

export default App
