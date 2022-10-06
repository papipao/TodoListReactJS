import React, { Component } from 'react';
import PokeCard from './PokeCard';

class PokeDex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className='Pokedex-winner'>Winning Hand</h1>;
    } else {
      title = <h1 className='Pokedex-loser'>Losing Hand</h1>;
    }

    return (
      <div className='Pokedex'>
        <h1>Pokedex</h1>
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className='Pokedex-card'>
          {this.props.pokemon.map((p) => (
            <PokeCard key={p.id} pokemon={p} />
          ))}
        </div>
      </div>
    );
  }
}

export default PokeDex;
