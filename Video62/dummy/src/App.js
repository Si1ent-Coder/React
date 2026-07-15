import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';
import { useEffect } from 'react';


function App() {

  const[text,setText] = useState('');
  const[name,setName] = useState('Raghav');

  //variation 1 -> Every Render
  // useEffect( () => {
  //   console.log("UI RENDERING DONE");
  // });

  // Variation2 -> First Render
  // useEffect(()=>{
  //     console.log("UI RENDERING DONE");
  // },[]);


  // Variation3 ->on first render + whenever dependency changes

  // useEffect( ()=>{
  //   console.log("Change observed");
  // },[name]);


  //Variation4 -> to handle unmounting of a component

    useEffect(()=>{ 
       //add event listener
       console.log("Listener added");
       
      return () =>{
        console.log("Listener removed");
      }

    },[text]);





  function changeHandler(event){
    setText(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
