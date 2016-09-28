import $ from 'jquery';
import ServerActions from './actions/ServerActions'

const API = {
  fetchPokemon(number) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${number}`, pokemon => {
      // debugger;
      $.get(`https://pokeapi.co/api/v2/pokemon-species/${number}`, pokedexEntry => {
        // debugger;
        ServerActions.receivePokemon(pokemon, pokedexEntry)
      })
    })

  },

  fetchEmAll() {
    $.get(`https://pokeapi.co/api/v2/pokedex/1/`, allPokemon => {
      // debugger;
      ServerActions.hoardPokemon(allPokemon)
    })
  }
}

export default API;
