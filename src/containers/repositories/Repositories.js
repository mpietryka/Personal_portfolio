import { MainContainer, Heading } from "../../components";
import { Carousel } from "../Carousel/Carousel";
import axios from "axios";
import { useState, useEffect } from "react";

export const Repositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchRepos = async () => {
      try {
        const result = await axios(
          `https://api.github.com/users/mpietryka/repos`
        );
        setRepos(result);
      } catch (err) {
        console.log(err);
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