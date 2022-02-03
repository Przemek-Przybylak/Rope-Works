import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  height: 90vh;
  background-color: black;
`;

export const SliderImage = styled.div`
  background-color: yellow;
  height: 100%;

  ${({ firstPicture }) =>
    firstPicture &&
    css`
      background-color: green;
    `};

  ${({ secondPicture }) =>
    secondPicture &&
    css`
      background-color: pink;
    `};

  ${({ thirdPicture }) =>
    thirdPicture &&
    css`
      background-color: brown;
    `};
`;
export const SliderSecond = styled.div`
  background-color: yellow;
  height: 100%;
`;
