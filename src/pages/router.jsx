import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./home/home";
import { Details } from "./details/details";

export const AppRoutes = () => {
  
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:name" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
};
