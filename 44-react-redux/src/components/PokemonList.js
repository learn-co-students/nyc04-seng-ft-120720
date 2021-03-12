import React from "react";
import styled from "styled-components";
import Pokemon from "./Pokemon";

function PokemonList({ pokemons }) {
  return (
    <List>
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon} />
      ))}
    </List>
  );
}

const List = styled.section`
  height: 84vh;
  overflow-y: scroll;
`;

export default PokemonList;
