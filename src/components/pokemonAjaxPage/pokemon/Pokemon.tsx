import { useGetPokemonDetailsQuery } from "../../../redux/api/pokemonApi";

interface IProps {
  pokemon: IPokemon;
}

function Pokemon({ pokemon }: IProps) {
  const { data: pokemonDetails } = useGetPokemonDetailsQuery(pokemon.name);
  const pokemonImageSrc = pokemonDetails?.sprites.front_default;
  const pokemonName = pokemon?.name;

  return (
    <li>
      <img src={pokemonImageSrc} alt={pokemon.name} />
      <h2>{pokemonName}</h2>
    </li>
  );
}

export default Pokemon;
