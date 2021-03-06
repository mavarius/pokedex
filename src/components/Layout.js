import React, { Component } from 'react'

import PokedexActions from '../actions/PokedexActions'
import PokedexStore from '../stores/PokedexStore'

import PokedexEntry from './PokedexEntry'
import PokedexList from './PokedexList'
import SearchBar from './SearchBar'

export default class Layout extends Component {
  constructor() {
    super();

    this.state = PokedexStore.getPokemon()

    this.fetchPokemon = this.fetchPokemon.bind(this)
    this._onChange = this._onChange.bind(this)
    this.dismiss = this.dismiss.bind(this)
  }

  componentWillMount() {
    PokedexStore.startListening(this._onChange)
  }

  componentDidMount() {
    PokedexActions.fetchEmAll()
  }

  componentWillUnmount() {
    PokedexStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState( PokedexStore.getPokemon() )
  }

  fetchPokemon(number) {
    PokedexActions.fetchPokemon(number)
  }

  dismiss() {
    PokedexActions.clearSearch();
  }

  render() {
    const { allPokemon, pokemon, pokedexEntry, unfilteredPokemon, fetching } = this.state
    return (
      <div className='container'>
        <h1 className='text-center'>Pokédex</h1>

        <SearchBar allPokemon={allPokemon} unfilteredPokemon={unfilteredPokemon}/>

        <PokedexEntry pokemon={pokemon} dismiss={this.dismiss} pokedexEntry={pokedexEntry} fetching={fetching}/>

        <PokedexList allPokemon={allPokemon} pokemon={pokemon} fetchPokemon={this.fetchPokemon}/>

      </div>
    )
  }
}


// TODO: implement live search
