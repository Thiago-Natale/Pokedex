import { Header } from "../components/header";
import { MainContainer } from "../components/mainContainer";
import { Pokedex } from "../components/pokedex";

export const Home = () => {
  return (
    <MainContainer>
      <Header/>
      <Pokedex/>
    </MainContainer>
  );
};
