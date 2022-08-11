import React from "react";
import linkedin from "./linkedin.png";
import github from "./github.png";
import { Centered, Signature, Socials } from "../../components";

export const Footer = () => {
  return (
    <>
      <Centered>
        <Socials href="https://www.linkedin.com/in/mateusz-pietryka-4a7288239">
          <img src={linkedin} alt="linkedin" />
        </Socials>
        <Socials href="https://github.com/mpietryka">
          <img src={github} alt="logo" />
        </Socials>
      </Centered>
      <Signature>Created by Mateusz Pietryka</Signature>
    </>
  );
};
