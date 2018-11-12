import React, {Component} from 'react'

import darthVader from '../assets/Darth_Vader.jpg'
import lukeSkywalker from '../assets/Luke_Skywalker.jpg'
import obiWanKenobi from '../assets/Obi_Wan_Kenobi.jpg'
import rdD2 from '../assets/R2_D2.jpg'

const characterPhotos = [
  {
    name: 'Darth Vader',
    image: {darthVader}
  },
  {
    name: 'Luke Skywalker',
    image: {lukeSkywalker}
  },
  {
    name: 'Obi-wan Kenobi',
    image: {obiWanKenobi}
  },
  {
    name: 'R2-D2',
    image: {rdD2}
  }
]


export default class CharacterDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='character-details'>
        <div>{this.props.character.name}, {this.props.character.url}</div>
        <div className='image'><img src={lukeSkywalker} /></div>
        <div className='stats'>STATS</div>
        <div className='films'>FILMS</div>
      </div>
    )
  }
}
