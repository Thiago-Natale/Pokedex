import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: Pixel;
  src: url(/fonts/Sixtyfour/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf);
  font-display: swap;
}

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    appearence: none;
    text-decoration: none;
    border:none;
}
`;
