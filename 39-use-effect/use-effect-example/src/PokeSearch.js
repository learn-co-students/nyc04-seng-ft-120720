import React, { useState } from "react";

const API_URL = `https://pokeapi.co/api/v2/pokemon/charmander`;

function PokeSearch() {
  const [pokemon, setPokemon] = useState(null);
  const [query, setQuery] = useState("charmander");

  // TODO: fetch pokemon when the component loads
  // TODO: fetch pokemon when the query changes

  console.log("query:", query);

  return (
    <div>
      <PokemonForm onSearch={setQuery} />
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

// Pokemon component
function Pokemon({ pokemon }) {
  if (!pokemon) return <h3>Loading...</h3>;
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name + " front sprite"}
      />
    </div>
  );
}

// PokemonForm component
function PokemonForm({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default PokeSearch;
