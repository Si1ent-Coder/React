import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Support from './Components/Support';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import MainHeader from './Components/MainHeader';

const App =()=>{
    return(
        <div>
            <nav>
                <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/support">Suport</Link></li>
                    <li><Link to="/lab">Labs</Link></li> */}

                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/support">Suport</NavLink></li>
                    <li><NavLink to="/lab">Labs</NavLink></li>

                </ul>
            </nav>

           <Routes>
            <Route path="/" element={<MainHeader></MainHeader>}>
            {/* Default Route using index */}
            <Route index element={<Home></Home>}></Route>
            <Route path="/support" element={<Support></Support>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/lab" element={<Labs></Labs>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            </Route>
         </Routes> 


        </div>
    )
}


export default App
