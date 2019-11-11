import React, {Component} from 'react';
import logo from './logos/logo.svg';
import irokoLogo from './logos/irokoLogo.png';
import LH from './logos/LH.jpg';
import './App.css';
import Category from './components/category';

import {Grid, Row} from 'react-flexbox-grid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {};
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

  render () {
    return (
      <div className="App">
        <Grid fluid>
          <Row className="Header">
            <img src={logo} className="App-logo" alt="Movie-DB-logo" />
            <img src={irokoLogo} className="App-logo" alt="Iroko-logo" />
            <img src={LH} className="App-logo" alt="LH-logo" />
          </Row>
          <Category movies={this.state.popular} category="Popular" />
          <Category movies={this.state.topRated} category="Top Rated" />
        </Grid>
      </div>
    );
  }
}

export default App;
