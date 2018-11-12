import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import CharacterCardController from './components/CharacterCardController.react'

import './app.scss'


const App = () => (
  <div className='app'>
    <CharacterCardController />
  </div>
)

export default App

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
