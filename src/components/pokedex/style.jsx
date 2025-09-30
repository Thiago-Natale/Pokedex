import styled from "styled-components";

export const PokedexContainer = styled.div`
  display: flex;
`;

export const PokedexLeftSide = styled.div`
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

export const PokedexLeftSideContainer = styled.div`
  display: flex;
  width: 270px;
  height: 360px;
  margin-top: 140px;
  margin-right: 30px;
  justify-content:center;
`;

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
