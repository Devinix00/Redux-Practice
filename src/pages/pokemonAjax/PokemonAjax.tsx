import styles from "./PokemonAjax.module.scss";
import Pokemon from "../../components/pokemonAjaxPage/pokemon/Pokemon";
import LoadingSpinner from "../../components/common/loadingSpinner/LoadingSpinner";
import usePokemonLoader from "../../hooks/usePokemonLoader";

function PokemonAjax() {
  const { pokemons, isLoading, isFetching, loader } = usePokemonLoader();

  return (
    <div className={styles.container}>
      {isLoading && !isFetching ? (
        <div className={styles.loading_spinner_container}>
          <LoadingSpinner />
        </div>
      ) : (
        <ul className={styles.pokemons_container}>
          {pokemons.map((pokemon, index) => (
            <Pokemon pokemon={pokemon} key={index} />
          ))}
          <div ref={loader} />
        </ul>
      )}
    </div>
  );
}

export default PokemonAjax;
