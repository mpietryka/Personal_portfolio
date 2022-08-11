import React from "react";
import profilePicture from "./profilePicture.png";
import { info } from "../../config";
import {
  Heading,
  Paragraph,
  MainContainer,
  Centered,
  ProfilePic,
  BioText,
  Grid2Cols,
} from "../../components";

const { about, passions, conclusion } = info;

export const Bio = () => {
  return (
    <MainContainer>
      <Grid2Cols>
        <Centered>
          <ProfilePic src={profilePicture} />
        </Centered>
        <BioText>
          <Heading>About me</Heading>
          <Paragraph>{about}</Paragraph>
          <Paragraph>{passions}</Paragraph>
          <Paragraph>{conclusion}</Paragraph>
        </BioText>
      </Grid2Cols>
    </MainContainer>
  );
};
