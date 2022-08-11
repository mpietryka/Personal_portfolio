import React from "react";
import { jobs } from "../../config";
import {
  MainContainer,
  Heading,
  Heading2,
  Description,
  Centered,
} from "../../components";
const { job1, jobDescription1, jobDate1 } = jobs;

export const Experience = () => {
  return (
    <MainContainer>
      <Heading>Relevant Experience</Heading>
      <Centered>
        <ul>
          <li>
            <Heading2>{job1}</Heading2>
            <Description>{jobDate1}</Description>
            <Description>{jobDescription1}</Description>
          </li>
        </ul>
      </Centered>
    </MainContainer>
  );
};
