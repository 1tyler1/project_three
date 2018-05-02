import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import PhotoPage from './components/PhotoPage'
import AddPhotoFormPage from './components/AddPhotoFormPage'
import UpdateUserPage from './components/UpdateUserPage';

class App extends Component {
  render() {
    return (
<div>
      <Router>
        
          <Switch>

         
            <Route exact path="/" component={HomePage} />
            {/* user routes */}
            <Route exact path="/user" component={LogInPage} />
            {/* delete and show in the show route */}
            <Route exact path="/user/:userId" component={ShowUserPage} />
            <Route exact path="/user/:userId/edit" component={UpdateUserFormPage}/>
            <Route exact path="/user/:userId/new" component ={NewUserFormPage} />
            {/* photos routes */}
            <Route exact path='/user/:userId/photos' component={ShowPhotoPage} />
            {/* delete and show in the show route */}
            <Route exact path='/user/:userId/photos/add' component={AddPhotoFormPage} />
            <Route exact path="/user/:userId/photos/edit" component={UpdatePhotoFormPage}/>
            <Route exact path="/user/:userId/photos/new" component ={NewPhotoFormPage} />

          </Switch>

      </Router>

      <footer class="footer">Tyler Lauren Designs</footer>

     </div>
    )
  }
}

export default App