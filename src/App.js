import React from 'react'
import {
  Header,
  Bio,
  Tech,
  Education,
  Experience,
  Footer,
  Repositories,
} from "./containers";

const App = () => {
//const [ toDo, setToDo ] = React.useState([])

/* React.useEffect(() => {
  const fetchData = async() => {
    try{
    const response = await fetch("http://localhost:8080")
    const data = await response.json()
    return data;

    }catch(error){

      return error;
    }
  }
  fetchData().then(data => setToDo(data));
  
}, [])
  console.log(toDo)  

   */
  
  return (
    <div className='bg-green-50'>
      <Header />
      <Bio />
      <Tech />
      <Education />
      <Experience />
      <Repositories />
      <Footer />
    </div>

    
  );
};

export default App;
