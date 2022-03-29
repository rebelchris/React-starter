export const getPokemon = (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(response => response.json());
}
