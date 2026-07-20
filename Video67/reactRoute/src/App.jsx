import { useState } from 'react'

import './App.css'

import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Dashboard from './Pages/Dashboard.jsx';

import {Route,Routes} from 'react-router-dom';


const App=()=>{

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return( 
    <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>  


        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

        </Routes>

    </div>
  )

}

export default App;
