import React, {Component} from 'react';
import './App.scss';
import Header from './components/header';
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
      fetchingReviews: false,
      displayDetailPg: false,
      movieSelected: false,
    };
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

  handleClick = movie => {
    this.setState ({
      displayDetailPg: true,
      movieSelected: movie.id,
    });
  };

  handleHeaderClick = movie => {
    this.setState ({
      displayDetailPg: false,
    });
  };

  render () {
    let {displayDetailPg, movieSelected} = this.state;
    return (
      <div className="App">
        {displayDetailPg
          ? <Grid fluid>
              <Header handleHeaderClick={this.handleHeaderClick} />
              <MovieDetails movie={movieSelected} />
            </Grid>
          : <Grid fluid>
              <Header handleHeaderClick={this.handleHeaderClick} />
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
