import {
  PokemonsList,
  PokemonsItens,
  PokemonListContainer,
} from "../../../styles/pokedex/pokeList";

export const PokeList = ({pokeList}) => {
  return (
    <PokemonListContainer>
      <PokemonsList>
        {pokeList.map((pokemon) => (
          <li key={pokemon.id}>
            <PokemonsItens>
              <img src={pokemon.static_image} alt={pokemon.name} />
              {pokemon.name}
            </PokemonsItens>
          </li>
        ))}
      </PokemonsList>
    </PokemonListContainer>
  );
};
