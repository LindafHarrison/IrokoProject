import React, {Component} from 'react';
import logo from './logos/logo.svg';
import irokoLogo from './logos/irokoLogo.png';
import LH from './logos/LH.jpg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    let API_KEY = '14c1419a1e75d43b43633d5fd7b10efb'
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then(data => this.setState({
          popular: data.results
      }))
      .catch((error) => {
        console.log('Looks like there was a problem: \n', error);
      })

      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then(data => this.setState({
        topRated: data.results
      }))
      .catch((error) => {
        console.log('Looks like there was a problem: \n', error);
      })
  }

  render() {
    console.log('results popular', this.state.popular ? this.state.popular : 'still waiting' ) //showing api request results for popular movies
    console.log('results top', this.state.topRated? this.state.topRated : 'still waiting' ) //showing api request results for popular movies

    return (
      <div className = "App">
          <div className="logos">
            <img src={logo} className="App-logo" alt="Movie-DB-logo" />
            <img src={irokoLogo} className="App-logo" alt="Iroko-logo" />
            <img src={LH} className="App-logo" alt="LH-logo" />
          </div>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
