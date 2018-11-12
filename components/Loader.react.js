import React from 'react'

import loadingIcon from '../assets/loading_icon.gif'

import './loader.scss'


const Loader = () => (
  <div className='loader'>
    <img className='loading-icon' src={loadingIcon} />
    The force is loading your request...
  </div>
)

export default Loader
