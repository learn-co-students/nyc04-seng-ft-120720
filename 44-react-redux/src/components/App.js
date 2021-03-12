import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PokemonMap from "./PokemonMap";
import Header from "./Header";
import PokemonList from "./PokemonList";
import { getWeather } from "../api/weather";
import themes from "../styles/themes";
import GlobalStyles from "../styles/GlobalStyles";

function App() {
  const [weather, setWeather] = useState({
    temperature: 65,
    temperatureUnit: "F",
    shortForecast: "Sunny",
    icon: "☀️",
  });
  const [position, setPosition] = useState({
    lat: 40.7008739,
    lng: -73.9875141,
  });
  const [pokemons, setPokemons] = useState([]);

  console.log("Weather:", weather);
  console.log("Location:", position);
  console.log("Pokemon:", pokemons);

  // get the user's location
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords }) => {
  //       setPosition({ lat: coords.latitude, lng: coords.longitude });
  //     },
  //     (err) => console.error("geolocation error", err),
  //     { timeout: 7000, enableHighAccuracy: true, maximumAge: 0 }
  //   );
  // }, []);

  // get the weather for that location
  // useEffect(() => {
  //   if (position.lat && position.lng) {
  //     getWeather(position.lat, position.lng).then(setWeather);
  //   }
  // }, [position]);

  // setting state
  function addPokemon(pokemon) {
    setPokemons([...pokemons, pokemon]);
  }

  if (!weather) return <h1>Loading...</h1>;

  return (
    <ThemeProvider theme={themes[weather.icon]}>
      <GlobalStyles />
      <Header weather={weather} />
      <MainContent>
        <PokemonList pokemons={pokemons} />
        <PokemonMap
          lat={position.lat}
          lng={position.lng}
          pokemons={pokemons}
          onAddPokemon={addPokemon}
          icon={weather.icon}
        />
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
