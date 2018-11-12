import React, {Component} from 'react'

import CharacterBio from './CharacterBio.react'
import CharacterCardHeading from './CharacterCardHeading.react'
import CharacterFilms from './CharacterFilms.react'
import Loader from './Loader.react'
import NotFoundPage from './NotFoundPage.react'

import darthVaderImage from '../assets/Darth_Vader.jpg'
import lukeSkywalkerImage from '../assets/Luke_Skywalker.jpg'
import obiWanKenobiImage from '../assets/Obi_Wan_Kenobi.jpg'
import rdD2Image from '../assets/R2_D2.jpg'

import CHARACTERS_DATA from '../data/characters.json'

import './characterCardController.scss'

const characterPhotos = {
  'Darth Vader': darthVaderImage,
  'Luke Skywalker': lukeSkywalkerImage,
  'Obi-wan Kenobi': obiWanKenobiImage,
  'R2-D2': rdD2Image
}


export default class CharacterCardController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characterData: {},
      loading: true,
      selectedCharacter: CHARACTERS_DATA[0].characters[0].name
    }

    this.onChange = this.onChange.bind(this)
    this.fetchAPIData = this.fetchAPIData.bind(this)
  }

  componentWillMount() { this.fetchAPIData(CHARACTERS_DATA[0].characters[0]) }

  onChange(event) {
    this.setState({loading: true})

    let characterKey = event.target.value
    const character = CHARACTERS_DATA[0].characters.find(name => name.name === characterKey)

    this.setState({selectedCharacter: event.target.value})

    this.fetchAPIData(character)
  }

  fetchAPIData(character) {
    const fetchAPI = (URL) => {
      fetch(URL)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw Error(`Request rejected with status ${response.status}`)
            this.setState({loading: false})
          }
        })
          .then(data => {
            this.setState({
              characterData: data,
              loading: false
            })
          })
            .catch( err => {
              console.error
              this.setState({
                loading: false,
                characterData: {}
              })
            })
    }

    fetchAPI(character.url)
  }

  helperIsEmpty(object) {
    for (var key in object) {
      if (object.hasOwnProperty(key))
        return false;
    }

    return true;
  }

  render() {
    let { name, birth_year, eye_color, hair_color, gender, height, mass, skin_color, films,...otherCharData } = this.state.characterData

    return (
      <div className='character-card-controller'>
        <CharacterCardHeading
          charactersData={CHARACTERS_DATA[0].characters}
          defaultValue={this.state.selectedCharacter}
          onChange={this.onChange}
        />
        {
          this.state.loading ? (
            <Loader />
          ) : (
            <div>
              {
                this.helperIsEmpty(this.state.characterData) ? (
                  <NotFoundPage />
                ) : (
                  <div className='character-card'>
                    <div className='character-image'>
                      {<img src={characterPhotos[name]} alt={name} />}
                    </div>
                    <CharacterBio characterData={this.state.characterData} />
                    <CharacterFilms films={films} />
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    )
  }
}
