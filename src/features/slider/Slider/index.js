import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../sliderSlice";
import { useIncreaseCounter } from "../useIncreaseCounter";
import { SliderImage, Wrapper } from "./styled";

export const Slider = () => {
  const counter = useSelector(selectCounter);
  useIncreaseCounter();
  return (
    <>
      <Wrapper>
        {counter === 0 ? <SliderImage /> : <SliderImage firstPicture />}
      </Wrapper>
    </>
  );
};
