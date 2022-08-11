import React from "react";
import { Bubble, Grid3Cols, Heading, MainContainer } from "../../components";

export const Tech = () => {
  return (
    <MainContainer>
      <Heading>Technologies I'm familiar with</Heading>
      <Grid3Cols>
        <Bubble>HTML5</Bubble>
        <Bubble>CSS3</Bubble>
        <Bubble>Tailwind CSS</Bubble>
        <Bubble>BootStrap</Bubble>
        <Bubble>Java</Bubble>
        <Bubble>SQL</Bubble>
      </Grid3Cols>
    </MainContainer>
  );
};
