import { MainContainer, Heading } from "../../components";
import { Carousel } from "../carousel/Carousel";
import axios from "axios";
import { useState, useEffect } from "react";

export const Repositories = () => {
  const [repos, setRepos] = useState([]);
  //const [error, setError] = useState(false);

 
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let isSubscribed = true;

    const fetchRepos = async () => {
      try {
        const result = await axios(
          `https://api.github.com/users/mpietryka/repos`
        );
        setRepos(result);
        console.log(result)
        //setError(false);
      } catch (error) {
        //setError(true);
        console.log(error);
      }
    };

    fetchRepos();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <>
      <MainContainer>
        <Heading>Github Repositories</Heading>
        
        {!repos ? "Loading..." : <Carousel repos={repos} />}
      </MainContainer>
    </>
  );
};
