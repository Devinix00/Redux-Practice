import React from "react";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import { useGetPokemonsQuery } from "../../redux/api/pokemonApi";
import Pokemon from "../../components/ajax/pokemon/Pokemon";

function PokemonAjax() {
  const { data } = useGetPokemonsQuery({});
  const pokemons: IPokemon[] = data?.results;

  return (
    <React.Fragment>
      <Breadcrumb />
      <ul style={{ width: "fit-content", margin: "0 auto", marginTop: "2rem" }}>
        {pokemons?.map((pokemon, i) => (
          <Pokemon pokemon={pokemon} key={i} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default PokemonAjax;
