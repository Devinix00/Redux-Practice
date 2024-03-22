import { useState, useEffect, useRef } from "react";
import { useGetPokemonsQuery } from "../redux/api/pokemonApi";

const usePokemonLoader = () => {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const {
    data: pokemonsData,
    isLoading,
    isFetching,
  } = useGetPokemonsQuery({ page });
  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        rootMargin: "50px",
      }
    );

    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, []);

  useEffect(() => {
    if (pokemonsData?.results.length) {
      setPokemons((prevPokemons) => [...prevPokemons, ...pokemonsData.results]);
    }
  }, [pokemonsData]);

  return { pokemons, isLoading, isFetching, loader };
};

export default usePokemonLoader;
