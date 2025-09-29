import styled from "styled-components";

export const PokedexRightSide = styled.div`
  background: transparent url(/images/pokedex-right.png) no-repeat center;
  background-size: cover;
  border-radius: 20px 35px 35px 20px;
  height: 525px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
`;

export const PokedexRightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  margin-left: 30px;
  height: 390px;
`;

export const PokemonsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 120px);
  box-sizing: border-box;
  overflow-y: scroll;
  height: 300px;
  border: solid 1px black;
  border-radius: 20px 0 0 20px;

  /* Scrollbar Chrome/Safari/Edge */
  &::-webkit-scrollbar {
    width: 8px;
    height: 90%;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.7);
  }

  /* Scrollbar Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
`;
export const PokemonsItens = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  justify-content: center;
  padding: 5px;
  width: 100%;
  cursor: pointer;

  &:hover img {
    scale: 1.2;
    transition: ease 0.5s;
  }
`;
