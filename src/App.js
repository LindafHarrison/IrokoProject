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
      isOpen: false,
      movieDetails: {
        display: false,
        movieSelected: false,
        reviews: null,
        details: null,
        videos: null,
      },
    };
    this.openModal = this.openModal.bind (this);
    this.closeModal = this.closeModal.bind (this);
    this.handleClick = this.handleClick.bind (this);
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

  componentDidUpdate () {
    let {movieDetails} = this.state;
    if (movieDetails.display && movieDetails.reviews === null) {
      let API_KEY = '14c1419a1e75d43b43633d5fd7b10efb';
      let movie_id = movieDetails.movieSelected.id;
      fetch (
        `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`
      )
        .then (res => res.json ())
        .then (data => {
          var mDetails = {...movieDetails};
          mDetails.reviews = data.results;
          this.setState ({movieDetails: mDetails});
        })
        .catch (error => {
          console.log ('Looks like there was a problem: \n', error);
        });
    }
    if (movieDetails.display && movieDetails.details === null) {
      let API_KEY = '14c1419a1e75d43b43633d5fd7b10efb';
      let movie_id = movieDetails.movieSelected.id;
      fetch (
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`
      )
        .then (res => res.json ())
        .then (data => {
          var mDetails = {...movieDetails};
          mDetails.details = data;
          this.setState ({movieDetails: mDetails});
        })
        .catch (error => {
          console.log ('Looks like there was a problem: \n', error);
        });
    }
    if (movieDetails.display && movieDetails.videos === null) {
      let API_KEY = '14c1419a1e75d43b43633d5fd7b10efb';
      let movie_id = movieDetails.movieSelected.id;
      fetch (
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}`
      )
        .then (res => res.json ())
        .then (data => {
          var mDetails = {...movieDetails};
          mDetails.videos = data;
          this.setState ({movieDetails: mDetails});
        })
        .catch (error => {
          console.log ('Looks like there was a problem: \n', error);
        });
    }
  }

  openModal () {
    this.setState ({isOpen: true});
  }

  closeModal () {
    this.setState ({isOpen: false});
  }

  handleClick = movie => {
    var mDetails = {...this.state.movieDetails};
    mDetails.display = true;
    mDetails.movieSelected = movie;
    this.setState ({
      movieDetails: mDetails,
    });
  };

  render () {
    let {movieDetails, isOpen} = this.state;
    return (
      <div className="App">
        {movieDetails.display
          ? <Grid fluid>
              <Row className="header">
                <img src={logo} className="App-logo" alt="Movie-DB-logo" />
                <img src={irokoLogo} className="App-logo" alt="Iroko-logo" />
                <img src={LH} className="App-logo" alt="LH-logo" />
              </Row>
              {movieDetails.details &&
                <MovieDetails
                  movie={movieDetails}
                  openModal={this.openModal}
                  closeModal={this.closeModal}
                  isOpen={isOpen}
                />}
            </Grid>
          : <Grid fluid>
              <Row className="header">
                <img src={logo} className="App-logo" alt="Movie-DB-logo" />
                <img src={irokoLogo} className="App-logo" alt="Iroko-logo" />
                <img src={LH} className="App-logo" alt="LH-logo" />
              </Row>
              <div className="categories">
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
