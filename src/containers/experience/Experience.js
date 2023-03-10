import React from "react";
import { jobs } from "../../config";
import {
  MainContainer,
  Heading,
  Heading2,
  Description,
  Centered,
} from "../../components";
const { job1, jobDescription1, jobDate1, job2, jobDate2, jobDescription2} = jobs;

export const Experience = () => {
  return (
    <MainContainer>
      <Heading>Relevant Experience</Heading>
      <Centered>
        <ul>
          <li className="pb-4">
            <Heading2>{job1}</Heading2>
            <small>{jobDate1}</small>
            <Description>{jobDescription1}</Description>
          </li>
          <li>
            <Heading2>{job2}</Heading2>
            <span className="text-xs">{jobDate2}</span>
            <Description>{jobDescription2}</Description>
          </li>
        </ul>
      </Centered>
    </MainContainer>
  );
};
