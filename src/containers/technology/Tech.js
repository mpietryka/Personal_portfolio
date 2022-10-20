import React from "react";
import { Bubble, Grid3Cols, Heading, MainContainer } from "../../components";

export const Tech = () => {
  return (
    <MainContainer>
      <Heading>I'm familiar with</Heading>
      <Grid3Cols>
        <Bubble>HTML</Bubble>
        <Bubble>CSS</Bubble>
        <Bubble>Tailwind CSS</Bubble>
        <Bubble>ReactJS</Bubble>
        <Bubble>Firebase</Bubble>
        <Bubble>JavaScript</Bubble>
        <Bubble>Java</Bubble>
        <Bubble>SQL</Bubble>
        <Bubble className="hidden md:block">and more...</Bubble>
      </Grid3Cols>
    </MainContainer>
  );
};
