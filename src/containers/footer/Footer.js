import React from "react";
import linkedin from "./linkedin.png";
import github from "./github.png";
import { Centered } from "../../components";

export const Footer = () => {
  return (
    <div>
      <Centered>
        <a
          href="https://www.linkedin.com/in/mateusz-pietryka-4a7288239"
          className="mx-12"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/mpietryka" className="mx-12">
          <img src={github} alt="logo" />
        </a>
      </Centered>
      <div className="text-xs md:text-sm md:font-bold text-right p-4">
        Created by Mateusz Pietryka
      </div>
    </div>
  );
};
