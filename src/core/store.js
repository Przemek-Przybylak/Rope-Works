import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slider/sliderSlice";

const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

export default store;
