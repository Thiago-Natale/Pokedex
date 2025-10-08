import styled from "styled-components";

export const PokemonsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 120px);
  box-sizing: border-box;
  overflow-y: scroll;
  height: 300px;
  width: 254px
  outline: none;
  border: 2px solid #333;
  box-shadow: 3px 4px 0 #888, 5px 7px 0 #333;
  background-color: #d8efffff;
  border-radius: 20px 0 0 20px;

  /* Scrollbar Chrome/Safari/Edge */
  &::-webkit-scrollbar {
    width: 8px;
    height: 90%;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(204, 204, 204, 0.7);
  }

  /* Scrollbar Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(29, 28, 28, 0.4) transparent;
`;

export const PokemonsItens = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  justify-content: center;
  padding: 5px;
  width: 100%;
  cursor: pointer;
  font-family: "Press Start 2P", monospace;
  font-weight: bold;
  text-transform: uppercase;

  &:hover img {
    scale: 1.2;
    transition: ease 0.5s;
  }
`;
