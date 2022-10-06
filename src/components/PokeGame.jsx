import React, { Component } from 'react';
import PokeDex from './PokeDex';

export class PokeGame extends Component {
  static defaultProps = {
    pokemon: [
      {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        base_experience: 62,
        img_url:
          'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png',
      },
      {
        id: 7,
        name: 'Squirtle',
        type: 'water',
        base_experience: 63,
        img_url:
          'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png',
      },
      {
        id: 11,
        name: 'Metapod',
        type: 'bug',
        base_experience: 72,
        img_url:
          'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/05fd4676fa4a4b58288510a97a5211e066e02464.png',
      },
      {
        id: 12,
        name: 'Butterfree',
        type: 'flying',
        base_experience: 178,
        img_url:
          'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/eacd20285cb634ba9fea41fc0fa13871c2fcbc66.png',
      },
      {
        id: 25,
        name: 'Pikachu',
        type: 'electric',
        base_experience: 112,
        img_url:
          'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png',
      },
      {
        id: 39,
        name: 'Jigglypuff',
        type: 'normal',
        base_experience: 95,
        img_url:
          'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/7a2bec0dd522d66353f0cf3df9148070456a3349.png',
      },
      {
        id: 94,
        name: 'Gengar',
        type: 'poison',
        base_experience: 225,
        img_url:
          'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/47549471dc54feb8acd4b3de3a27ea8e9e9fd25c.png',
      },
      {
        id: 133,
        name: 'Eevee',
        type: 'normal',
        base_experience: 65,
        img_url:
          'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/1fab9d9b86c9071e3f10c14b7869e3ec338f1429.png',
      },
    ],
  };

  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <PokeDex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <PokeDex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default PokeGame;
