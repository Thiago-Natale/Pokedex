import { StyledButton } from "./style";
export const PokeButton = ({ label, onClick, styles }) => {
  return <StyledButton styles={styles} onClick={onClick}>{label}</StyledButton>;
};
