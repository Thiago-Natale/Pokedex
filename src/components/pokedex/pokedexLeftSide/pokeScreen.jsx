import { PokemonContext } from "../../../contexts/pokemonContext/PokemonContext";
import { Screen } from "./style";
import { useContext } from "react";

export const PokeScreen = () => {
  const { selectedPokemon } = useContext(PokemonContext);
  return (
    <Screen>
      {!selectedPokemon ? (
        <p>Selecione um pokemon</p>
      ) : (
        <img src={selectedPokemon.gif} alt={selectedPokemon.name} />
      )}
    </Screen>
  );
};
