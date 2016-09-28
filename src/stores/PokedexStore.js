import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _pokemon = null;

let _pokedexEntry = null;

let _allPokemon = null;

let _unfilteredPokemon = null;

class PokedexStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      // const { pokemon, pokedexEntry, allPokemon, searchEntry } = action.payload

      switch (action.type) {
        case 'RECEIVE_POKEMON':
          _pokemon = action.payload.pokemon
          _pokedexEntry = action.payload.pokedexEntry
          this.emit('CHANGE')
          break;
        case 'FETCH_EM_ALL':
          _allPokemon = action.payload.allPokemon.pokemon_entries
          _unfilteredPokemon = action.payload.allPokemon.pokemon_entries
          this.emit('CHANGE')
          break;
        case 'CLEAR_SEARCH':
          _pokemon = null;
          this.emit('CHANGE')
          break;
        case 'FILTER_POKEMON':
          _allPokemon = action.payload.searchEntry
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
      pokedexEntry: _pokedexEntry,
      unfilteredPokemon: _unfilteredPokemon
    }
  }
}

export default new PokedexStore();
