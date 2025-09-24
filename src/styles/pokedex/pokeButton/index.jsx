import styled from "styled-components";

export const PokeButton = ({ label, onClick, color = "#e63946" }) => {
  return <StyledButton onClick={onClick} color={color}>{label}</StyledButton>;
};

const StyledButton = styled.button`
  background: ${(props) => props.color};
  border: none;
  width: 80px;
  height: 80px;

  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  box-shadow: 0 8px #333, 0 0 10px rgba(0,0,0,0.4);
  transition: all 0.1s ease-in-out;

  &:active {
    transform: translateY(4px);
    box-shadow: 0 4px #222;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;