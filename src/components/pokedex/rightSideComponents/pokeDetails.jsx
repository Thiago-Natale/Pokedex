import { useContext, useEffect, useState } from "react";
import {
  AbilitieDetailContainer,
  GroupTitle,
  InfoGroup,
  InfoItem,
  InfoItemList,
  PokemonsInfoList,
} from "./style";
import { PokemonContext } from "../../../contexts/pokemonContext/PokemonContext";
import { Loading } from "../../loading";
import { ScanLineEffect } from "../../retro-effect";
import { useNavigate, useParams } from "react-router";

async function fetchApi(url) {
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
    getPokemonData(selectedPokemon.url);
  }, [selectedPokemon]);

  async function getPokemonData(selectedPokemonUrl) {
    const pokemonData = await fetchApi(selectedPokemonUrl);

    const abilitiesWithDetails = await Promise.all(
      pokemonData.abilities.map(async (abilitie) => {
        const url = abilitie.ability.url;
        const name = abilitie.ability.name;

        const abilitieData = await fetchApi(url);

        // pega a descrição em inglês
        const abilitieDescription = abilitieData.effect_entries.find(
          (entry) => entry.language.name === "en"
        );

        return {
          name,
          description: abilitieDescription?.short_effect || "No description available.",
        };
      })
    );

    const pokemonDetails = {
      moves: pokemonData.moves.map((move) => move.move.name),
      abilities: abilitiesWithDetails,
      types: pokemonData.types.map((type) => type.type.name),
    };

    setPokemonInfos(pokemonDetails);
    console.log(pokemonDetails)
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
                  <InfoItem key={index}>
                    {abilitie.name}
                    <AbilitieDetailContainer>{abilitie.description}</AbilitieDetailContainer>
                  </InfoItem>
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
