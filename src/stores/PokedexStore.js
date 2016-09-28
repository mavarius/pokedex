import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _pokemon = null;

let _pokedexEntry = null;

let _allPokemon = null;

class PokedexStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_POKEMON':
          _pokemon = action.payload.pokemon
          _pokedexEntry = action.payload.pokedexEntry
          this.emit('CHANGE')
          break;
        case 'FETCH_EM_ALL':
          _allPokemon = action.payload.allPokemon.pokemon_entries
          this.emit('CHANGE')
          break;
        case 'CLEAR_SEARCH':
          _pokemon = null;
          this.emit('CHANGE')
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getPokemon() {
    return {
      pokemon: _pokemon,
      allPokemon: _allPokemon,
      pokedexEntry: _pokedexEntry
    }
  }
}

export default new PokedexStore();
