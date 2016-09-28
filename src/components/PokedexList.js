import React, { Component } from 'react'

export default class PokedexList extends Component {
  constructor() {
    super()
  }

  render() {
    const { allPokemon, pokemon, fetchPokemon } = this.props;
    return (
        <div className="row">
          {allPokemon ?
            <div className="pokemonList">
              {allPokemon.map((aPokemon, i) => {
                return <button key={aPokemon.entry_number} onClick={() => (this.props.fetchPokemon(aPokemon.entry_number))} className="btn pokemonBtn"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${aPokemon.entry_number}.png`}/><span className="pokeName">{aPokemon.pokemon_species.name}</span></button>
              })}
            </div>
          : <span className="loadingMessage">Hoarding Pokémon...</span> }
        </div>
    )
  }
}
