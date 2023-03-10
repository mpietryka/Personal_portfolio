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
  
  return (
    <div className='bg-slate-50'>
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
