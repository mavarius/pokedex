import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor() {
    super()
  }

  render() {
    const { pokemon, pokedexEntry, dismiss } = this.props
    return (
      <div className="row">
        <div className="searchBar">
          <input type="text" ref="pokeSearch" placeholder="Search by Pokemon name or number"/>
        </div>
      </div>
    )
  }
}

// <span className="loadingMessage">Catching your Pokémon...</span>
// <button onClick={this.fetchPokemon} className="btn btn-default">Catch Pokemon</button>
