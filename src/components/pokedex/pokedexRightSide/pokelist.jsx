import { PokemonsList, PokemonsItens } from "./style";
import { PokeButton } from "../pokeButton";

export const PokeList = ({ pokeList, addPokemonsOnList, selectPokemon }) => {
  return (
    <>
      <PokemonsList>
        {pokeList.map((pokemon, index) => (
          <li key={index}>
            <PokemonsItens
              onClick={() => {
                selectPokemon({
                  name: pokemon.name,
                  url: pokemon.url,
                  gif: pokemon.gif,
                });
              }}
            >
              <img src={pokemon.static_image} alt={pokemon.name} />
              {pokemon.name}
            </PokemonsItens>
          </li>
        ))}
      </PokemonsList>
      <div style={{ marginTop: "25px" }}>
        <PokeButton
          label="Carregar mais"
          width="140px"
          height="30px"
          onClick={addPokemonsOnList}
        />
      </div>
    </>
  );
};
