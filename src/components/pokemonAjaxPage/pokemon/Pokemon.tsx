import styles from "./Pokemon.module.scss";
import { useGetPokemonDetailsQuery } from "../../../redux/api/pokemonApi";
import { Link } from "react-router-dom";

interface IProps {
  pokemon: IPokemon;
}

function Pokemon({ pokemon }: IProps) {
  const { data: pokemonDetails } = useGetPokemonDetailsQuery(pokemon.name);
  const pokemonImageSrc = pokemonDetails?.sprites.front_default;
  const pokemonName = pokemon?.name;

  return (
    <li className={styles.container}>
      <Link to={`${pokemonDetails?.id}`} className={styles.link}>
        <img src={pokemonImageSrc} alt={pokemon.name} />
        <h2>{pokemonName}</h2>
      </Link>
    </li>
  );
}

export default Pokemon;
