import styled from "styled-components";

export const PokemonScreenContainer = styled.div`
  background: transparent url(/images/pokedex-left.png) no-repeat center;
  background-size: cover;
  border-radius: 35px 20px 20px 35px;
  height: 525px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
`;

export const Screen = styled.div`
  display: flex;
  width:220px;
  height:139px;
  margin-top:140px;
  margin-right:30px;
  align-items:center;
  justify-content:center;
  overflow: hidden;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
