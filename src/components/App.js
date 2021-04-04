import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../styles/App.scss';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Main from './Main/Main';


class App extends Component {
  render() {
    return(
      <Router>

        <Navigation/>
        <Header name="Agnieszka Paradecka" />
        {<Main />}
        <footer></footer>

      </Router>
    )
  }
}

export default App;
