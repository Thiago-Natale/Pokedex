import { useEffect, useState } from "react";
import { PokeList } from "./pokeList";
import { PokeScreen } from "./pokeScreen";

async function getPokemonList() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=21&offset=0"
  );
  return await response.json();
}

async function getPokemonDetails(url) {
  const response = await fetch(url);
  return await response.json();
}

export const Pokedex = () => {
  const [pokeList, setPokeListAndInfos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pokeListData = await getPokemonList();
      const pokeList = pokeListData.results;

      const pokeListAndInfos = await Promise.all(
        pokeList.map(async (pokemon, index) => {
          const response = await getPokemonDetails(pokemon.url);
          return {
            id: index,
            name: pokemon.name,
            static_image: response.sprites.front_default,
            gif: response.sprites.other.showdown.front_default,
            abilities: response.abilities,
            moves: response.moves,
          };
        })
      );
      console.log(pokeListAndInfos);
      setPokeListAndInfos(pokeListAndInfos);
    }
    fetchData();
  }, []);
  return (
    <>
      <PokeScreen pokeList={pokeList}/>
      <PokeList pokeList={pokeList} />
    </>
  );
};
