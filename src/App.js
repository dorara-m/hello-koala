import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Koala!</h1>
        <footer className="App-footer">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            this page is built using `React`
          </p>
        </footer>
        
      </div>
    )
  }
}

export default App;
