import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import PhotoPage from './components/PhotoPage'
import ShowUserPage from './components/ShowUserPage'
import AddPhotoFormPage from './components/AddPhotoFormPage'
import UpdateUserFormPage from './components/UpdateUserFormPage';
import NewUserFormPage from './components/NewUserFormPage'
import NewPhotoFormPage from './components/NewPhotoFormPage'
import UpdatePhotoFormPage from './components/UpdatePhotoFormPage'



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          
            <Switch>

            {/* user routes */}
              <Route exact path="/" component={HomePage} />
             {/* delete and show in the show route */} 
              <Route exact path="/user" component={LogInPage} />
              {/* photos routes */}
              <Route exact path='/user/:userId/photos' component={PhotoPage} />
              <Route exact path="/user/:userId" component={ShowUserPage} />
              <Route exact path="/user/:userId/edit" component={UpdateUserFormPage}/>
              <Route exact path="/user/:userId/new" component ={NewUserFormPage} />
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