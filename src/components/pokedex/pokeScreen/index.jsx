import {
  PokemonScreenContainer,
  Screen,
} from "../../../styles/pokedex/pokeScreen";

export const PokeScreen = ({ pokeList }) => {
  return (
    <PokemonScreenContainer>
      <Screen>
        {pokeList.length > 0 ? (
          <img src="{pokeList[0].gif}" alt={pokeList[0].name} />
        ) : (
          <p>Carregando Pokémon...</p>
        )}
      </Screen>
    </PokemonScreenContainer>
  );
};
