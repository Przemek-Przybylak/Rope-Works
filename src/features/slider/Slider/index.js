import { useSelector } from "react-redux";
import { selectCounter } from "../sliderSlice";
import { useIncreaseCounter } from "../useIncreaseCounter";
import {
  ImageDescription,
  SliderSecond,
  SliderWrapper,
  Wrapper,
} from "./styled";

export const Slider = () => {
  const counter = useSelector(selectCounter);
  useIncreaseCounter();
  return (
    <>
      <Wrapper>
        {counter === 0 ? (
          <SliderWrapper>
            <ImageDescription>montaż drabin</ImageDescription>
          </SliderWrapper>
        ) : (
          <SliderSecond />
        )}
      </Wrapper>
    </>
  );
};
