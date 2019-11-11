import React, {Component} from 'react';
import logo from './logos/logo.svg';
import irokoLogo from './logos/irokoLogo.png';
import LH from './logos/LH.jpg';
import './App.scss';
import Category from './components/category';
import MovieDetails from './components/movieDetails';

import {Grid, Row} from 'react-flexbox-grid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      movieDetails: {
        display: false,
        movieSelected: false,
      },
    };
  }

  componentDidMount () {
    let API_KEY = '14c1419a1e75d43b43633d5fd7b10efb';
    fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then (res => res.json ())
      .then (data =>
        this.setState ({
          popular: data.results,
        })
      )
      .catch (error => {
        console.log ('Looks like there was a problem: \n', error);
      });

    fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then (res => res.json ())
      .then (data =>
        this.setState ({
          topRated: data.results,
        })
      )
      .catch (error => {
        console.log ('Looks like there was a problem: \n', error);
      });
  }

  handleClick = movie => {
    this.setState ({
      movieDetails: {
        display: true,
        movieSelected: movie,
      },
    });
  };

  render () {
    let {movieDetails} = this.state;
    console.log (
      'movieDetails',
      movieDetails && movieDetails.display,
      movieDetails &&
        movieDetails.movieSelected &&
        movieDetails.movieSelected.title
    );
    return (
      <div className="App">
        {movieDetails.display
          ? <Grid fluid>
              <Row className="Header">
                <img src={logo} className="App-logo" alt="Movie-DB-logo" />
                <img src={irokoLogo} className="App-logo" alt="Iroko-logo" />
                <img src={LH} className="App-logo" alt="LH-logo" />
              </Row>
              <MovieDetails />
            </Grid>
          : <Grid fluid>
              <Row className="Header">
                <img src={logo} className="App-logo" alt="Movie-DB-logo" />
                <img src={irokoLogo} className="App-logo" alt="Iroko-logo" />
                <img src={LH} className="App-logo" alt="LH-logo" />
              </Row>
              <div className="Categories">
                <Category
                  movies={this.state.popular}
                  category="Popular"
                  handleClick={this.handleClick}
                />
                <Category
                  movies={this.state.topRated}
                  category="Top Rated"
                  handleClick={this.handleClick}
                />
              </div>
            </Grid>}

      </div>
    );
  }
}

export default App;
