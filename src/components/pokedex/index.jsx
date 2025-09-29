import { useEffect, useState } from "react";
import { PokeList } from "./pokedexRightSide/pokelist";
import { PokeScreen } from "./pokedexLeftSide/screen";
import {
  PokedexLeftSide,
  PokedexLeftSideContainer,
} from "./pokedexLeftSide/style";
import {
  PokedexRightSide,
  PokedexRightSideContainer,
} from "./pokedexRightSide/style";
import { PokedexContainer } from "./style";

async function getPokemonList(offSet) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offSet}`
  );
  return await response.json();
}

async function getPokemonDetails(url) {
  const response = await fetch(url);
  return await response.json();
}

export const Pokedex = () => {
  const [pokeList, setPokeList] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetchData(offSet);
  }, [offSet]);

  async function fetchData(offSet) {
    const pokeListData = await getPokemonList(offSet);
    const pokeListResults = pokeListData.results;

    const pokeListAndInfos = await Promise.all(
      pokeListResults.map(async (pokemon) => {
        const response = await getPokemonDetails(pokemon.url);
        return {
          name: pokemon.name,
          url: pokemon.url,
          static_image: response.sprites.front_default,
          gif: response.sprites.other.showdown.front_default,
        };
      })
    );
    setPokeList((prev) => [...prev, ...pokeListAndInfos]);
    console.log(pokeList);
  }

  async function addPokemonsOnList() {
    setOffSet((prev) => prev + 12);
  }

  return (
    <PokedexContainer>
      <PokedexLeftSide>
        <PokedexLeftSideContainer>
          <PokeScreen selectedPokemon={selectedPokemon} />
        </PokedexLeftSideContainer>
      </PokedexLeftSide>

      <PokedexRightSide>
        <PokedexRightSideContainer>
          <PokeList
            pokeList={pokeList}
            addPokemonsOnList={addPokemonsOnList}
            selectPokemon={setSelectedPokemon}
          />
        </PokedexRightSideContainer>
      </PokedexRightSide>
    </PokedexContainer>
  );
};
