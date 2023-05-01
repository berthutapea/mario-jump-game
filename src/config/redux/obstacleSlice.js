import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obs1Bottom: null,
  obs1Height: null,
  obs1Left: null,
  obs1Right: null,
  obs1Top: null,
  obs1Width: null,
  obs1X: null,
  obs1Y: null,

  obs2Bottom: null,
  obs2Height: null,
  obs2Left: null,
  obs2Right: null,
  obs2Top: null,
  obs2Width: null,
  obs2X: null,
  obs2Y: null,
};

export const obstacleSlice = createSlice({
  name: "obstacle",
  initialState,
  reducers: {
    obstacle1Bottom: (state, action) => {
      state.obs1Bottom = action.payload;
    },
    obstacle1Height: (state, action) => {
      state.obs1Height = action.payload;
    },
    obstacle1Left: (state, action) => {
      state.obs1Left = action.payload;
    },
    obstacle1Right: (state, action) => {
      state.obs1Right = action.payload;
    },
    obstacle1Top: (state, action) => {
      state.obs1Top = action.payload;
    },
    obstacle1Width: (state, action) => {
      state.obs1Width = action.payload;
    },
    obstacle1X: (state, action) => {
      state.obs1X = action.payload;
    },
    obstacle1Y: (state, action) => {
      state.obs1Y = action.payload;
    },

    obstacle2Bottom: (state, action) => {
      state.obs2Bottom = action.payload;
    },
    obstacle2Height: (state, action) => {
      state.obs2Height = action.payload;
    },
    obstacle2Left: (state, action) => {
      state.obs2Left = action.payload;
    },
    obstacle2Right: (state, action) => {
      state.obs2Right = action.payload;
    },
    obstacle2Top: (state, action) => {
      state.obs2Top = action.payload;
    },
    obstacle2Width: (state, action) => {
      state.obs2Width = action.payload;
    },
    obstacle2X: (state, action) => {
      state.obs2X = action.payload;
    },
    obstacle2Y: (state, action) => {
      state.obs2Y = action.payload;
    },
  },
});

export const {
  obstacle1Bottom,
  obstacle1Height,
  obstacle1Left,
  obstacle1Right,
  obstacle1Top,
  obstacle1Width,
  obstacle1X,
  obstacle1Y,
  obstacle2Bottom,
  obstacle2Height,
  obstacle2Left,
  obstacle2Right,
  obstacle2Top,
  obstacle2Width,
  obstacle2X,
  obstacle2Y
} = obstacleSlice.actions;
export default obstacleSlice.reducer;
