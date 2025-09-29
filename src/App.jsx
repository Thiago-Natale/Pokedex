import { ThemeProvider } from "./contexts/ThemeProvider";
import { AppRoutes } from "./pages/router";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
