import styled, { css } from "styled-components";
import noImage from "../images/noImage.jpg";
import czyszczenie from "../images/czyszczenie.jpg";
import drabina from "../images/drabina.jpg";
import instalacyjne from "../images/instalacyjne.jpg";
import mycie from "../images/mycie.jpg";
import specjalne2 from "../images/specjalne2.jpg";
import wiatrak from "../images/wiatrak.jpg";

export const Grid = styled.ul`
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0 0 50px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
`;

export const Tile = styled.li`
  padding: 10px 10px 0 10px;
  height: 300px;
  background-color: white;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
`;

export const Poster = styled.img`
  height: 85%;
  background-position: center;
  border-radius: 5%;
  width: 100%;
  background-image: url("${noImage}");
  background-repeat: no-repeat;
  background-size: cover;

  ${({ cleaning }) =>
    cleaning &&
    css`
      background-image: url("${czyszczenie}");
    `}
  ${({ washing }) =>
    washing &&
    css`
      background-image: url("${mycie}");
    `}
    ${({ ladder }) =>
    ladder &&
    css`
      background-image: url("${drabina}");
    `}
    ${({ gwo }) =>
    gwo &&
    css`
      background-image: url("${wiatrak}");
    `}
    ${({ instalation }) =>
    instalation &&
    css`
      background-image: url("${instalacyjne}");
    `}
    ${({ special }) =>
    special &&
    css`
      background-image: url("${specjalne2}");
    `};
`;

export const DescriptionWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
`;
export const Description = styled.span`
  font-weight: 600;
  text-transform: capitalize;
`;
