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
  transition: 0.3s;

  &:hover {
    transform: scale(1.3);
  }
`;

export const FacebookLogo = styled(Facebook)`
  fill: black;
`;

export const LinkedInLogo = styled(LinkedIN)`
  fill: black;
`;
