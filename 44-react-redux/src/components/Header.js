import React from "react";
import styled from "styled-components";

function Header({ weather }) {
  return (
    <Wrapper>
      <h1>PokeMapper</h1>
      {weather && (
        <Weather>
          <span role="img" aria-label={weather.shortForecast}>
            {weather.icon}
          </span>
          <h4>{weather.temperature}°F</h4>
        </Weather>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;

  h1 {
    padding: 0.5rem;
    background-color: var(--theme-primary);
    color: var(--main-font-color);
  }
`;

const Weather = styled.div`
  display: flex;
  align-items: center;
  background-color: #ef534f;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export default Header;
