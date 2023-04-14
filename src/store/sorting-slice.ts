import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  size: 10,
  algorithm: "linear",
  min: 0,
  max: 10,
  selectedMin: 0,
  selectedMax: 0,
};

const sortingStateSlice = createSlice({
  name: "sorting",
  initialState: {
    controllable: initialState,
  },
  reducers: {
    updateAlgo(state, action: PayloadAction<string>) {
      state.controllable.algorithm = action.payload;
    },
    updateSize(state, action: PayloadAction<number>) {
      state.controllable.size = action.payload;
    },
    updateMinMax(state, action: PayloadAction<{ min: number; max: number }>) {
      state.controllable.min = action.payload.min;
      state.controllable.max = action.payload.max;
    },
    updateSelectedMinMax(
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) {
      state.controllable.selectedMin = action.payload.min;
      state.controllable.selectedMax = action.payload.max;
    },
  },
});

export default sortingStateSlice;
export const sortingStateActions = sortingStateSlice.actions;
export type stateType = ReturnType<() => typeof initialState>;
