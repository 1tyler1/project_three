import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import PhotoPage from './components/PhotoPage'
import AddPhoto from './components/AddPhoto'

class App extends Component {
  render() {
    return (
<div>
      <Router>
        
          <Switch>

         
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user" component={LogInPage} />
            <Route exact path="/user/:userId" component={PhotoPage} />
            <Route exact path='/user/:userId/photos' component={AddPhoto} />
          </Switch>

      </Router>

      <footer class="footer">Tyler Lauren Designs</footer>

     </div>
    )
  }
}

export default App