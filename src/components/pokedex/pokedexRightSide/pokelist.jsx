import { PokemonsList, PokemonsItens } from "./style";
import { PokeButton } from "../../pokeButton";
import { PokemonContext } from "../../../contexts/pokemonContext/PokemonContext";
import { useState, useEffect, useContext } from "react";

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

export const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const { selectedPokemon ,setSelectedPokemon } = useContext(PokemonContext);

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
    <>
      <PokemonsList>
        {pokeList.map((pokemon, index) => (
          <li key={index}>
            <PokemonsItens
              onClick={() => {
                console.log(selectedPokemon);
                
                setSelectedPokemon(pokemon);
              }}
            >
              <img src={pokemon.static_image} alt={pokemon.name} />
              {pokemon.name}
            </PokemonsItens>
          </li>
        ))}
      </PokemonsList>

      <PokeButton
        style={{ marginTop: "25px" }}
        label="Carregar mais"
        width="140px"
        height="30px"
        onClick={addPokemonsOnList}
      />
    </>
  );
};
