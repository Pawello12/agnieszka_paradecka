import React, {Component} from 'react';
import '../styles/App.scss';
import Navigation from './Navigation/Navigation';

class App extends Component {
  render() {
    return(
      <>
        <Navigation/>
        <header><h1>Agnieszka Paradecka</h1></header>
        <main></main>
        <footer></footer>
      </>
    )
  }
}

export default App;
