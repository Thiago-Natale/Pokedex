import styled from "styled-components";

export const PokeHeader = styled.header`
  display: flex;
  width: 800px;
  flex-direction: row-reverse;
  padding: 10px;

  @media (max-width: 900px) {
   width: 100%; 
  }

  @media (max-width: 590px) {
    flex-direction: row;
    justify-content: center;
    aling-items: center;
  }
`;
