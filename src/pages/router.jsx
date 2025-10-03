import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./home/home";
import { Details } from "./details/details";
import { TestComponent } from "../components/teste";

export const AppRoutes = () => {
  
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:name" element={<Details/>}/>
        <Route path="/teste" element={<TestComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
};
