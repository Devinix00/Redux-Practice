import styles from "./PokemonAjax.module.scss";
import { useGetPokemonsQuery } from "../../redux/api/pokemonApi";
import Pokemon from "../../components/pokemonAjaxPage/pokemon/Pokemon";
import LoadingSpinner from "../../components/common/loadingSpinner/LoadingSpinner";

function PokemonAjax() {
  const { data, isLoading } = useGetPokemonsQuery({});
  const pokemons: IPokemon[] = data?.results;

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loading_spinner_container}>
          <LoadingSpinner />
        </div>
      ) : (
        <ul className={styles.pokemons_container}>
          {pokemons?.map((pokemon, i) => (
            <Pokemon pokemon={pokemon} key={i} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default PokemonAjax;
