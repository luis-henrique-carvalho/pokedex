import React from "react";
import PokemonCard from "./components/PokemonCard";

function App() {

  const charmander = {
    id: 4,
    name: "Charmander",
    type: "Fire",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  };

  const bulbasaur = {
    id: 5,
    name: "Bulbasaur",
    type: "Grass",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  }

  const squirtle = {
    id: 6,
    name: "Squirtle",
    type: "Water",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  }


  return (
    <div className="flex flex-col items-center container mx-auto gap-5">
      <h1 className="font-bold text-4xl mt-5">Meus pokemons</h1>
      <div className="flex flex-col justify-center flex-wrap md:flex-row gap-4">
        <PokemonCard pokemon={charmander} />
        <PokemonCard pokemon={bulbasaur} />
        <PokemonCard pokemon={squirtle} />
      </div>
    </div>
  )
}

export default App;
