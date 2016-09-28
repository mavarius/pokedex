import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receivePokemon(pokemon, pokedexEntry) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_POKEMON',
      payload: { pokemon, pokedexEntry }
    })
  },

  hoardPokemon(allPokemon) {
    AppDispatcher.dispatch({
      type: 'FETCH_EM_ALL',
      payload: { allPokemon }
    })
  }
}

export default ServerActions;
