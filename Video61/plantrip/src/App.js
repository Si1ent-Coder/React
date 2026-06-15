import logo from './logo.svg';
import './App.css';
import data from './data';
import { useState } from 'react';

import Tours from './components/Tours';

function App() {

    const[tours,setTours] = useState(data);

    function removeTour(id){
        const newTours = tours.filter(tours => tours.id !==id);
        setTours(newTours);
    }
    if(tours.length==0){
      return(
        <div className='refresh'>
          <h1>No Tours Left</h1>
          <button className='btn-white'
          onClick={()=>setTours(data)}>Refresh</button>
        </div>
      )
    }

  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
