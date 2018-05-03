import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import PhotoPage from './components/Photos/PhotoPage'
import ShowUserPage from './components/Users/ShowUserPage'
import AddPhotoFormPage from './components/Photos/AddPhotoFormPage'
import UpdateUserFormPage from './components/Users/UpdateUserFormPage';
import NewPhotoFormPage from './components/Photos/NewPhotoFormPage'
import UpdatePhotoFormPage from './components/Photos/UpdatePhotoFormPage'



class App extends Component {
  render() {
    return (
      <div>
      <div>
        <Router>
          
            <Switch>

            {/* user routes */}
              <Route exact path="/" component={HomePage} />
             {/* delete and show in the show route */} 
              <Route exact path="/user" component={LogInPage} />
              <Route exact path="/user/:userId" component={ShowUserPage} />
              {/* photos routes */}
              <Route exact path='/user/:userId/photos' component={PhotoPage} />
              
              <Route exact path="/user/:userId/edit" component={UpdateUserFormPage}/>
             
              {/* delete and show in the show route */}
              <Route exact path='/user/:userId/photos/add' component={AddPhotoFormPage} />
              <Route exact path="/user/:userId/photos/edit" component={UpdatePhotoFormPage}/>
              <Route exact path="/user/:userId/photos/new" component ={NewPhotoFormPage} />

            </Switch>

        </Router>

      
      <footer class="footer">Tyler Lauren Designs</footer>      
      </div>
      </div>
    )
  }
}

export default App