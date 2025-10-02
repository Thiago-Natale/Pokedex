import styled from "styled-components";

export const StyledButton = styled.button`
  ${(props) => props.styles}
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Press Start 2P", monospace;
  
  transition: all 0.1s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;