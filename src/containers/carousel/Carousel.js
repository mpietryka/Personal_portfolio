import { MainContainer, Heading } from "../../components";
import { Repos } from "../repos/Repos"
import axios from "axios";
import { useState } from "react";

export const Carousel = () => {
  const [repos, setRepos] = useState([]);

  const handleClick = async () => {
    try {
      const result = await axios (`https://api.github.com/users/mpietryka/repos`)
      setRepos(result)
    }catch(err){
      console.log(err);
    }
  }

  return (
  <>
    <MainContainer>
       <button onClick={handleClick}>Show Repositories</button>
    </MainContainer>
    
    <MainContainer>
      <Heading>Github Repositories</Heading>
      <Repos repos={repos}/>
    </MainContainer>
    </>
  );
};
