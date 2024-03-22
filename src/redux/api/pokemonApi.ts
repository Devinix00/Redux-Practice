import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: ({ page = 1, limit = 18 }) =>
        `pokemon?offset=${(page - 1) * limit}&limit=${limit}`,
    }),
    getPokemonDetails: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonDetailInfo: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useGetPokemonDetailsQuery,
  useGetPokemonDetailInfoQuery,
} = pokemonApi;
