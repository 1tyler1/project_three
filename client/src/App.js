import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styles from './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import PhotoPage from './components/PhotoPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
         
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LogInPage} />
            <Route path="/user/:userId" component={PhotoPage} />
          
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App