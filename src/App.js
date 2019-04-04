import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <main>
          <CocktailsContainer />
        </main>
      </div>
    );
  }
}

export default App;
