import { useContext } from "react";
import { StyledMain } from "./style";
import { ThemeContext } from "../../contexts/themeContext/ThemeContext";

export const MainContainer = ({children}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledMain background={theme.background}>{children}</StyledMain>
  );
};
