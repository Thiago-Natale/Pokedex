import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/global.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
