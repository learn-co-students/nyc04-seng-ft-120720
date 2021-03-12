import { createSlice } from "@reduxjs/toolkit";

// function setPosition(state, action) {
//   state.lat = action.payload.lat;
//   state.lng = action.payload.lng;
// }

const positionSlice = createSlice({
  name: "position",
  initialState: {
    lat: 40.7008739,
    lng: -73.9875141,
  },
  reducers: {
    // { payload: { lat, lng } }
    setPosition(state, action) {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { setPosition } = positionSlice.actions;
export default positionSlice.reducer;
