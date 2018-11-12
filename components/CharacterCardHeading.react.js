import React, {Component} from 'react'

import starWarsLogo from '../assets/Star_Wars_Logo.png'

import './characterCardHeading.scss'


const CharacterCardHeading = ({charactersData, defaultValue, onChange}) => (
  <header className='character-card-heading'>
    <img src={starWarsLogo} alt='Star Wars logo' />
    <select defaultValue={defaultValue} onChange={onChange}>
      {
        charactersData.map(character => (
          <option key={character.name} value={character.name}>
            {character.name}
          </option>
        ))
      }
    </select>
  </header>
)

export default CharacterCardHeading
