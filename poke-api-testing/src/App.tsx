import "./App.css";
import { useState } from "react";
import ResultCard from "./components/ResultCard";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  function onPokemonSearch() {
    console.log("Pokemon Name: ", pokemonName);
    // http get request
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Pokemon found");
        setPokemonData(data);
      })
      .catch((err) => {
        console.error(err);
        alert("Pokemon not found");
      });
  }

  function clearData() {
    setPokemonData(null);
    setPokemonName("");
  }

  return (
    <div className="App">
      <div className="card">
        <h1>Pokémon Search</h1>
        <p>Search for any Pokémon to get its details!</p>
        <div className="row">
          <input
            type="text"
            value={pokemonName}
            placeholder="Enter Pokémon Name"
            onChange={(e) => setPokemonName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onPokemonSearch();
              }
            }}
          />
          {pokemonData && <button onClick={clearData}>X</button>}
        </div>
        {pokemonData && <ResultCard pokemon={pokemonData} />}
      </div>
    </div>
  );
}

export default App;
