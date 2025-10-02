import { Header } from "../../components/header";
import { MainContainer } from "../../components/mainContainer";
import { PokedexLayout } from "../../components/pokedex";
import { PokeScreen } from "../../components/pokedex/leftSideComponents";
import { PokeDetails } from "../../components/pokedex/rightSideComponents/pokeDetails";

export const Details = () => {

  return (
    <MainContainer>
      <Header />
      <PokedexLayout leftSide={PokeScreen}  rightSide={PokeDetails}/>
    </MainContainer>
  );
};