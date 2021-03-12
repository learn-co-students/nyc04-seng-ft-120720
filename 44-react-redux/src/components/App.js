import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import PokemonMap from "./PokemonMap";
import Header from "./Header";
import PokemonList from "./PokemonList";
import { getWeather } from "../api/weather";
import themes from "../styles/themes";
import GlobalStyles from "../styles/GlobalStyles";
import { setPosition } from "../redux/positionSlice";
import { setWeather } from "../redux/weatherSlice";

function App() {
  const weather = useSelector((state) => state.weather);
  // const [weather, setWeather] = useState({
  //   temperature: 65,
  //   temperatureUnit: "F",
  //   shortForecast: "Sunny",
  //   icon: "☁️",
  // });

  // get the user's location
  const dispatch = useDispatch();
  const position = useSelector((state) => state.position);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        dispatch(setPosition({ lat: coords.latitude, lng: coords.longitude }));
      },
      (err) => console.error("geolocation error", err),
      { timeout: 7000, enableHighAccuracy: true, maximumAge: 0 }
    );
  }, [dispatch]);

  // get the weather for that location
  useEffect(() => {
    if (position.lat && position.lng) {
      getWeather(position.lat, position.lng).then((weather) => {
        dispatch(setWeather(weather));
      });
    }
  }, [position, dispatch]);

  if (!weather) return <h1>Loading...</h1>;

  return (
    <ThemeProvider theme={themes[weather.icon]}>
      <GlobalStyles />
      <Header />
      <MainContent>
        <PokemonList />
        <PokemonMap />
      </MainContent>
    </ThemeProvider>
  );
}

const MainContent = styled.main`
  max-width: 90%;
  margin: 4vh auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  column-gap: 1rem;
`;

export default App;
