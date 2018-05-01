import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import PhotoPage from './components/PhotoPage'

class App extends Component {
  render() {
    return (
<div>
      <Router>
        <div>
          <Switch>

         
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LogInPage} />
            <Route path="/login/:userId" component={PhotoPage} />
          
          </Switch>
        </div>
      </Router>

      <footer class="footer">Tyler Lauren Designs</footer>

     </div>
    )
  }
}

export default App