import { Screen } from "./style";

export const PokeScreen = ({ selectedPokemon }) => {
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
