import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCounter, selectCounter, toggleCounter } from "./sliderSlice";

export const useIncreaseCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  useEffect(() => {
    setTimeout(() => {
      {
        counter < 1 ? dispatch(toggleCounter()) : dispatch(clearCounter());
      }
    }, 5000);
  });
};
