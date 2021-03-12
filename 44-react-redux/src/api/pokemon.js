export function getRandomPokemon() {
  const id = Math.floor(Math.random() * 964) + 1;
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((r) => {
      return r.json().then((data) => {
        if (r.ok) return data;
        throw data;
      });
    })
    .then((pokemon) => {
      return {
        name: pokemon.name,
        sprites: pokemon.sprites,
        stats: pokemon.stats,
      };
    });
}
