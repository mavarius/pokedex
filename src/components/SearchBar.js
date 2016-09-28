import React, { Component } from 'react'
import PokedexActions from '../actions/PokedexActions'

export default class SearchBar extends Component {
  constructor() {
    super()
    this.liveSearch = this.liveSearch.bind(this)
  }

  liveSearch() {
    const { pokeSearch } = this.refs
    const { allPokemon, unfilteredPokemon } = this.props

    let searchValue = pokeSearch.value

    let searchEntry

    if (searchValue.length > 0) {
      if (isNaN(searchValue)) {
        searchEntry = unfilteredPokemon.filter(pokemon => {
          return pokemon.pokemon_species.name.slice(0, (searchValue.length)) === searchValue.toLowerCase()
        })
      } else {
        searchEntry = unfilteredPokemon.filter(pokemon => {
          return pokemon.entry_number === parseInt(searchValue)
        })
      }
    } else {
      searchEntry = unfilteredPokemon
    }

    PokedexActions.filterPokemon(searchEntry)
  }

  render() {
    const { pokemon, pokedexEntry, dismiss } = this.props
    return (
      <div className="row">
        <div className="searchBar">
          <input onChange={this.liveSearch} type="text" ref="pokeSearch" placeholder="Search by Pokemon name or number"/>
        </div>
      </div>
    )
  }
}
