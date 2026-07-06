import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Filter from './Components/Filter.jsx';
import Cards from './Components/Cards.jsx';
import Spinner from './Components/Spinner.jsx';
import { toast } from 'react-toastify';

import { apiUrl,filterData} from './data.jsx'


const App = () =>{

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output ->
      setCourses(output.data);
    }
    catch(error){
        toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);
  
  return(
    <div>


      <div>
      <Navbar/> 
      </div>

      <div>
      <Filter filterData ={filterData} />
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
     


    </div>
  )

}


export default App;45