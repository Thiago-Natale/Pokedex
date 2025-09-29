import {StyledButton} from "./style"
export const PokeButton = ({
  label,
  onClick,
  width = "100px",
  height = "20px",
  fontColor = "white",
  bgColor = "#e63946",
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      onClick={onClick}
      fontColor={fontColor}
      bgColor={bgColor}
    >
      {label}
    </StyledButton>
  );
};