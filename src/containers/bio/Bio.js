import React from "react";
import profilePic from "./profilePicture.png";
import { info } from "../../config";
import { Heading, Paragraph, MainContainer, Centered } from "../../components";

const { about, passions, conclusion } = info;

export const Bio = () => {
  return (
    <MainContainer>
      <div className="grid lg:grid-cols-2">
        <Centered>
          <img
            src={profilePic}
            alt="logo"
            className="md:max-h-72 rounded-full hover:scale-105 transition duration-300 ease-in-out my-auto"
          />
        </Centered>
        <div className="max-w-sm md:max-w-lg md:mx-16 mx-auto">
          <Heading>About me</Heading>
          <Paragraph>{about}</Paragraph>
          <Paragraph>{passions}</Paragraph>
          <Paragraph>{conclusion}</Paragraph>
        </div>
      </div>
    </MainContainer>
  );
};
