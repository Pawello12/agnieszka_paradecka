import React, {Component} from 'react';
import '../styles/App.scss';
import Navigation from './Navigation/Navigation';

class App extends Component {
  render() {
    return(
      <>
        <nav>
          <Navigation/>
        </nav>
        <header></header>
        <main></main>
        <footer></footer>
      </>
    )
  }
}

export default App;
