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
  }
}

export default PokedexActions;
