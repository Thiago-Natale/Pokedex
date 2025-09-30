import { PokemonProvider } from "./contexts/pokemonContext/PokemonProvider";
import { ThemeProvider } from "./contexts/themeContext/ThemeProvider";
import { AppRoutes } from "./pages/router";

function App() {
  return (
    <ThemeProvider>
      <PokemonProvider>
        <AppRoutes />
      </PokemonProvider>
    </ThemeProvider>
  );
}

export default App;
