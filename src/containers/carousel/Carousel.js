import { MainContainer, Heading } from "../../components";
import { Repos } from "../repos/Repos"
import axios from "axios";
import { useState, useEffect } from "react";

export const Carousel = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // set a clean up flag
    let isSubscribed = true;

    const tryToFetchRepos = async () => {
      try {
        const result = await axios (`https://api.github.com/users/mpietryka/repos`)
        setRepos(result)
      }catch(err){
        console.log(err);
      }
    };

    tryToFetchRepos();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
  <>

    <MainContainer>
      <Heading>Github Repositories</Heading>
      {!repos ? 'Loading...' : <Repos repos={repos}/>}
    </MainContainer>
    </>
  );
};
