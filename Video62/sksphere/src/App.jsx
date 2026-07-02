import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
// import Navbar from './Navbar.jsx';
// import Filter from './Filter.jsx';
// import Cards from './Cards.jsx';




import { apiUrl,filterData } from './data.jsx';

function App() {
  return(
    <div>
    <Navbar/>

    <Filter filterData={filterData}/>

    <Cards/>

    </div>
  );
};

export default App;
 