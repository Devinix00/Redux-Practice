import { useState, useEffect, useRef } from "react";
import { useGetPokemonsQuery } from "../redux/api/pokemonApi";
import useInfiniteScroll from "./useInfiniteScroll";

const usePokemonLoader = () => {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const loader = useRef<HTMLDivElement | null>(null);
  const {
    data: pokemonsData,
    isLoading,
    isFetching,
  } = useGetPokemonsQuery({ page });

  useInfiniteScroll({ setPage, loader });

  useEffect(() => {
    if (pokemonsData?.results.length) {
      setPokemons((prevPokemons) => [...prevPokemons, ...pokemonsData.results]);
    }
  }, [pokemonsData]);

  return { pokemons, isLoading, isFetching, loader };
};

export default usePokemonLoader;
