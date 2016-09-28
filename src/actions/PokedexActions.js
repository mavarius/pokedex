import API from '../API'
import AppDispatcher from '../AppDispatcher'

const PokedexActions = {
  fetchPokemon(number) {
    API.fetchPokemon(number);
  },

  fetchEmAll() {
    API.fetchEmAll();
  },

  clearSearch() {
    AppDispatcher.dispatch({
      type: 'CLEAR_SEARCH'
    })
  },

  filterPokemon(searchEntry) {
    AppDispatcher.dispatch({
      type: 'FILTER_POKEMON',
      payload: { searchEntry }
    })
  }
}

export default PokedexActions;
