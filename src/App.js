import React, {Component} from 'react';
import logo from './logo.svg';
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
        data: data
      }))
  }

  render() {
    console.log('data', this.state.data ? this.state.data.results : 'still waiting' ) //showing api request results for popular movies

    return (
      <div className = "App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
