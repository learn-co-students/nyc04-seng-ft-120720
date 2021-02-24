import React, { useEffect, useState } from "react";
import { Card, Button, Image, Loader } from "semantic-ui-react";

function Pokemon() {
  const [pokemon, setPokemon] = useState({
    data: null,
    isLoaded: false,
  });

  useEffect(getRandomPokemon, []);

  function getRandomPokemon() {
    setPokemon({ data: null, isLoaded: false });
    const pokeId = Math.round(Math.random() * 802);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => res.json())
      .then((pokemon) => setPokemon({ data: pokemon, isLoaded: true }));
  }

  return (
    <Card fluid>
      <Card.Content textAlign="center">
        {pokemon.isLoaded ? (
          <div>
            <h3>{pokemon.data.name}</h3>
            <Image src={pokemon.data.sprites.front_default} />
            <br />
            <Button onClick={getRandomPokemon}>Get New Pokemon</Button>
          </div>
        ) : (
          <div style={{ height: 300 }}>
            <Loader active size="large">
              Loading
            </Loader>
          </div>
        )}
      </Card.Content>
    </Card>
  );
}

export default Pokemon;
