import { PokemonModel } from "../models/PokemonModel";
import "./result.css";

interface ResultProps {
  pokemon: PokemonModel & { sprites: { front_default: string } };
}
const ResultCard = ({ pokemon }: ResultProps) => {
  return (
    <div className="result">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>
        {pokemon.name
          .split(" ")
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ")}
      </h2>
      <p>#{pokemon.id}</p>
      <div className="row">
        <p>
          <b>Base Experience: </b>
        </p>
        <p>{pokemon.base_experience}</p>
      </div>
      <div className="row">
        <p>
          <b>Height: </b>
        </p>
        <p>{pokemon.height}</p>
      </div>
      <div className="row">
        <p>
          <b>Weight: </b>
        </p>
        <p>{pokemon.weight}hg</p>
      </div>

      {pokemon.abilities === 0 && (
        <div className="column">
          <p>
            <b>Abilities: </b>
          </p>
          <ul>
            {Object.keys(pokemon.abilities).map((key) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
