import styled from "styled-components";
import montazDabiny from "../images/montazDabiny.jpg";

export const Wrapper = styled.article`
  height: 92vh;
  margin-bottom: 50px;
`;

export const SliderWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-image: url("${montazDabiny}");
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const ImageDescription = styled.h3`
  font-size: 50px;
  letter-spacing: 1.3;
  font-weight: 900;
  padding-left: 50px;
  text-transform: uppercase;
`;

export const SliderSecond = styled.div`
  background-color: yellow;
  height: 100%;
  width: 100%;
`;
