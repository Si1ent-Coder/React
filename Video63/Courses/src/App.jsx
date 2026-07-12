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
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output ->
      console.log(output);
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
    <div className='min-h-screen flex flex-col'>


      <div>
      <Navbar/> 
      </div>  

      <div className='bg-gray-800'>

      <div>
      <Filter filterData ={filterData} category={category} setCategory={setCategory}/>
      </div>

      <div className="w-11/12 max-w-[1200px] flex flex-wrap mx-auto justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
        </div>


    </div>
  )

}


export default App;