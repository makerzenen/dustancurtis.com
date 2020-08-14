import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="App">
        <article className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-header-title">dustan curtis</h1>
          <h2 className="App-header-subtitle">of the internet and its territories</h2>
        </article>
      </section>
    );
  }
}

export default App;
