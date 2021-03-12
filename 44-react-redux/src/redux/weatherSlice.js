import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: 65,
    temperatureUnit: "F",
    shortForecast: "Sunny",
    icon: "☁️",
  },
  reducers: {
    setWeather(state, action) {
      return action.payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
