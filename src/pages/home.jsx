import { Header } from "../components/header";
import { MainContainer } from "../components/mainContainer";
import { PokedexLayout } from "../components/pokedex";
import { PokeScreen } from "../components/pokedex/pokedexLeftSide/pokeScreen";
import { PokeList } from "../components/pokedex/pokedexRightSide/pokelist";

export const Home = () => {
  return (
    <MainContainer>
      <Header />
      <PokedexLayout leftSide={PokeScreen} rightSide={PokeList}/>
    </MainContainer>
  );
};
