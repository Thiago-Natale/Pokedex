import { useContext, useEffect, useState } from "react";
import {
  GroupTitle,
  InfoGroup,
  InfoItem,
  InfoItemList,
  PokemonsInfoList,
} from "./style";
import { PokemonContext } from "../../../contexts/pokemonContext/PokemonContext";
import { Loading } from "../../loading";
import { ScanLineEffect } from "../../retro-effect";
import { useNavigate } from "react-router";

async function getPokemonDetails(url) {
  const response = await fetch(url);
  return await response.json();
}
export const PokeDetails = ({}) => {
  const { selectedPokemon } = useContext(PokemonContext);
  const [pokemonInfos, setPokemonInfos] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedPokemon) {
      navigate("/");
      return;
    }
    fetchData(selectedPokemon.url);
  }, [selectedPokemon]);

  async function fetchData(selectedPokemon) {
    const pokemonData = await getPokemonDetails(selectedPokemon);
    const pokemonDetails = {
      moves: pokemonData.moves.map((move) => move.move.name),
      abilities: pokemonData.abilities.map((abilitie) => abilitie.ability.name),
      types: pokemonData.types.map((type) => type.type.name)
    };

    setPokemonInfos(pokemonDetails);
  }

  async function handleOpenAbilitie() {
    
  }

  return (
    <ScanLineEffect>
      <PokemonsInfoList>
        {!pokemonInfos ? (
          <Loading />
        ) : (
          <>
            <InfoGroup>
              <GroupTitle
                style={{
                  background:
                    "linear-gradient(to bottom, #ffde7a, #ffc23a, #d67c00)",
                  border: "2px solid #d67c00",
                }}
              >
                Types
              </GroupTitle>
              <InfoItemList>
                {pokemonInfos.types.map((type, index) => (
                  <InfoItem key={index}>{type}</InfoItem>
                ))}
              </InfoItemList>
            </InfoGroup>

            <InfoGroup>
              <GroupTitle
                style={{
                  background:
                    "linear-gradient(to bottom, #b4fd6aff, #aafa41ff, #6c9c2c)",
                  border: "2px solid #6c9c2c",
                }}
              >
                Abilities
              </GroupTitle>
              <InfoItemList>
                {pokemonInfos.abilities.map((abilitie, index) => (
                  <InfoItem key={index}>{abilitie}</InfoItem>
                ))}
              </InfoItemList>
            </InfoGroup>

            <InfoGroup>
              <GroupTitle
                style={{
                  background:
                    "linear-gradient(to bottom, #9de6ffff, #62c0e0, #16658c)",
                  border: "2px solid #16658c",
                }}
              >
                Moves
              </GroupTitle>
              <InfoItemList>
                {pokemonInfos.moves.map((move, index) => (
                  <InfoItem key={index}>{move}</InfoItem>
                ))}
              </InfoItemList>
            </InfoGroup>
          </>
        )}
      </PokemonsInfoList>
    </ScanLineEffect>
  );
};
