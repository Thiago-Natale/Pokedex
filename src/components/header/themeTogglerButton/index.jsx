import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext/ThemeContext";
import { ToggleButtonStyled } from "./style";
import { themes } from "../../../contexts/themeContext/Themes";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ToggleButtonStyled
      onClick={() => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
      }}
    >
      <img src={theme.icon} alt="" />
    </ToggleButtonStyled>
  );
};
