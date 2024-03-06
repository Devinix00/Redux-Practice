import styles from "./Pokemon.module.scss";

interface IProps {
  pokemon: IPokemon;
}

function Pokemon({ pokemon }: IProps): JSX.Element {
  return <li className={styles.pokemon_name}>{pokemon.name}</li>;
}

export default Pokemon;
