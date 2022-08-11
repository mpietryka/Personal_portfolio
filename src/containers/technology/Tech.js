import React from "react";
import { Bubble, Heading, MainContainer } from "../../components";

export const Tech = () => {
  return (
    <MainContainer>
      <Heading>Technologies I'm familiar with</Heading>
      <div className="grid grid-cols-3 gap-3 md:gap-8 text-white">
        <Bubble>HTML5</Bubble>
        <Bubble>CSS3</Bubble>
        <Bubble>Tailwind CSS</Bubble>
        <Bubble>BootStrap</Bubble>
        <Bubble>Java</Bubble>
        <Bubble>SQL</Bubble>
      </div>
    </MainContainer>
  );
};
