/* eslint-disable react-hooks/exhaustive-deps */
// Flow
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";
import NotFound from "./pages/NotFound";
import PokemonSearch from "./pages/PokemonSearch";
// Components
import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="flex flex-col px-5 items-center container mx-auto min-h-screen bg-red gap-5">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="/pokemon/search/:name" element={<PokemonSearch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
