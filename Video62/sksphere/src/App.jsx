import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import Navbar from './components/Navbar.jsx';
import Filter from './components/Filter.jsx';
import Cards from './components/Cards.jsx';

import React from 'react';


import { apiUrl,filterData } from './data.jsx';

const App = () => {

  const[ courses,setCourses] = useState({});


  useEffect( () =>{

    const fetchData = async() =>{

      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[]);


  return(
    <div>
    <Navbar/>

    <Filter filterData={filterData}/>

    <Cards courses={courses}/>

    </div>
  );
};

export default App;
 