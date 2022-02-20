import styled from "styled-components";
import { ReactComponent as Facebook } from "../svg/Facebook.svg";
import { ReactComponent as LinkedIN } from "../svg/LinkedIN.svg";

export const IconsList = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Icon = styled.a`
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
`;

export const FacebookLogo = styled(Facebook)`
  fill: black;
  & :hover {
    fill: grey;
  }
`;

export const LinkedInLogo = styled(LinkedIN)`
  fill: black;
  & :hover {
    fill: grey;
  }
`;
