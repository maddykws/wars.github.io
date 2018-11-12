import React from 'react'

import './characterBio.scss'


const CharacterBio = ({characterData}) => (
  <div className='character-bio'>
    <h2>Character Bio:</h2>
    <div className='bio-details'>
      <div className='flex-item'>Birth Year:</div><div className='flex-item'>{characterData.birth_year}</div>
      <div className='flex-item'>Eye Color:</div><div className='flex-item'>{characterData.eye_color}</div>
      <div className='flex-item'>Hair Color:</div><div className='flex-item'>{characterData.hair_color}</div>
      <div className='flex-item'>Gender:</div><div className='flex-item'>{characterData.gender}</div>
      <div className='flex-item'>Height:</div><div className='flex-item'>{characterData.height}</div>
      <div className='flex-item'>Mass:</div><div className='flex-item'>{characterData.mass}</div>
      <div className='flex-item'>Skin Color:</div><div className='flex-item'>{characterData.skin_color}</div>
    </div>
  </div>
)

export default CharacterBio
