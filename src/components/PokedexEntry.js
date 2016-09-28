import React, { Component } from 'react'

export default class PokedexEntry extends Component {
  constructor() {
    super()
  }

  render() {
    const { pokemon, pokedexEntry, dismiss } = this.props
    return (
      <div className="row">
        {pokemon ?
          <div className="modalBack" onClick={dismiss}>
            <div className="pokeCard">
              <button className="close" onClick={dismiss}>x</button>
              <img className="picFront" src={pokemon.sprites.front_default}/>
              <img className="picBack" src={pokemon.sprites.back_default}/>
              <div className="pokeInfo">
                <h1 className="name">{pokemon.name}</h1>
                <h4 className="genera">{pokedexEntry.genera[0].genus}</h4>
                {pokemon.types.map((type, i) => {return <span key={i} className={`type type-${type.type.name}`}>{type.type.name}</span>})}
                <p className="flavorText">{pokedexEntry.flavor_text_entries[1].flavor_text}</p>
              </div>
            </div>
          </div>
        : <span></span> }
      </div>
    )
  }
}

// <span className="loadingMessage">Catching your Pokémon...</span>
