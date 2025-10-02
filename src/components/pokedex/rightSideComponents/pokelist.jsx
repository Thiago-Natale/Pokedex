import { PokemonsList, PokemonsItens } from "./style";
import { PokeButton } from "../../pokeButton";
import { PokemonContext } from "../../../contexts/pokemonContext/PokemonContext";
import { useState, useEffect, useContext } from "react";
import { Loading } from "../../loading";
import { ScanLineEffect } from "../../retro-effect";

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
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

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
          id: response.id,
          url: pokemon.url,
          static_image: response.sprites.front_default,
          gif: response.sprites.other.showdown.front_default,
        };
      })
    );
    console.log(pokeListAndInfos);
    setPokeList((prev) => [...prev, ...pokeListAndInfos]);
  }

  async function addPokemonsOnList() {
    setOffSet((prev) => prev + 12);
  }

  return (
    <>
      <ScanLineEffect>
        <PokemonsList>
          {pokeList.length === 0 ? (
            <Loading />
          ) : (
            pokeList.map((pokemon, index) => (
              <li key={index}>
                <PokemonsItens
                  onClick={() => {
                    console.log(selectedPokemon);

                    setSelectedPokemon(pokemon);
                  }}
                >
                  <img src={pokemon.static_image} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
                </PokemonsItens>
              </li>
            ))
          )}
        </PokemonsList>
      </ScanLineEffect>

      <PokeButton
        styles="
        background-color: #555;
        box-shadow: 3px 4px 0 #222, 5px 7px 0 #000;
        color: white;
        padding: 10px 20px;
        margin-top: 10px;

        &:active {
          transform: translateY(4px);
          box-shadow: 3px 4px #222;
        }
        "
        label="Carregar mais"
        onClick={addPokemonsOnList}
      />
    </>
  );
};
