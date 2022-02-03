import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    toggleCounter: (state) => {
      state.counter = +1;
    },
    clearCounter: (state) => {
      state.counter = 0;
    },
  },
});

export const { toggleCounter, clearCounter } = sliderSlice.actions;

export const selectCounter = (state) => state.slider.counter;

export default sliderSlice.reducer;
