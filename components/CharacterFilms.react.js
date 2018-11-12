import React, {Component} from 'react'

import moment from 'moment'

import './characterFilms.scss'


export default class haracterFilms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filmData: {},
      useThisData: []
    }

    this.fetchAPIData = this.fetchAPIData.bind(this)
    this.toggleFilmBlurb = this.toggleFilmBlurb.bind(this)
  }

  componentWillMount() { this.fetchAPIData(this.props.films) }

  fetchAPIData(films) {
    films.map(filmURL => {
      fetch(filmURL)
        .then(response => response.json())
          .then(filmData => {
            this.setState({useThisData: this.state.useThisData.concat(filmData)})
          })
    })
  }

  toggleFilmBlurb(event) {
    console.log('=> ', event.target.parentElement.classList)
    event.target.parentElement.classList.toggle('show-all')
  }

  render() {
    if (this.state.useThisData) {
      return (
        <div className='character-films'>
          <h2>Appears In:</h2>
          {
            this.state.useThisData.map(film => (
              <div className='film-details' key={film.title}>
                <h3>{film.title}</h3>
                <div className='film-detail'>
                  <div className='release-date'>
                    <strong>Release Date:</strong> {moment(film.release_date, 'YYYY-MM-DD').format('dddd, MMMM DD YYYY')}
                  </div>
                  <div className='film-blurb'>
                    {film.opening_crawl}
                    <div className='toggle-button' onClick={this.toggleFilmBlurb}></div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      )
    }
  }
}
