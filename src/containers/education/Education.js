import React from "react";
import { edu } from "../../config";
import {
  MainContainer,
  Heading,
  Heading2,
  Description,
  Centered,
} from "../../components";
const { edu1, eduDate1 } = edu;

export const Education = () => {
  return (
    <MainContainer>
      <Heading>Relevant Education</Heading>
      <Centered>
        <ul>
          <li>
            <Heading2>{edu1}</Heading2>
            <Description>{eduDate1}</Description>
          </li>
        </ul>
      </Centered>
    </MainContainer>
  );
};
