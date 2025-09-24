import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};
