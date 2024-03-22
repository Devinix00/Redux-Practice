import styles from "./PokemonAjaxDetail.module.scss";
import LoadingSpinner from "../../components/common/loadingSpinner/LoadingSpinner";
import { useGetPokemonDetailInfoQuery } from "../../redux/api/pokemonApi";
import { useParams } from "react-router-dom";

function PokemonAjaxDetail() {
  const { id } = useParams();
  const { data: pokemonDetail, isLoading } = useGetPokemonDetailInfoQuery(id);
  console.log(pokemonDetail);
  const pokemonImageSrc = pokemonDetail?.sprites.front_default;
  const pokemonName = pokemonDetail?.name;

  return (
    <div className={styles.container}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.pokemon_container}>
          <img src={pokemonImageSrc} alt={pokemonName} />
          <p>{pokemonName}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonAjaxDetail;
