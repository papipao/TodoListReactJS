import React, { Component } from 'react';

class PokeCard extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <div className='Pokecard'>
        <h3 className='Pokecard-title'>{pokemon.name}</h3>
        <img src={pokemon.img_url} alt={pokemon.name} rel='noreferrer' />
        <p className='Pokecard-data'>Type: {pokemon.type}</p>
        <p className='Pokecard-data'>Exp: {pokemon.base_experience}</p>
      </div>
    );
  }
}

export default PokeCard;
