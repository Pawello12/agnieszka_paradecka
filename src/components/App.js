import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../styles/App.scss';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return(
      <Router>

        <Navigation/>
        <Header name="Agnieszka Paradecka" />
        {<Main />}
        <Footer year={"2021"} name="Agnieszka Paradecka" />

      </Router>
    )
  }
}

export default App;
