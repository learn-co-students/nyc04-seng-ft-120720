import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Pokemon from "./Pokemon";

function PokemonList() {
  const pokemons = useSelector((state) => state.pokemons);
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
