import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class HomePage extends Component {
  render(){
    return (
     
<div class="row">
  <div class="col s6 m3">
    <h2 class="header center">Progress!!</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="../../public/action-athlete-barbell-841130.jpg" />
      
      <div class="card-stacked">
        <div class="card-content">
          <p class="center">Progress is app an that allows you to visualize your progression, whether weight loss or making gains. Best wishes on your journey to changing your body for the best!</p>
        </div>
        <div class="card-action">
        <Link class="waves-effect waves-light btn" to='/login'>Login Link</Link>
        </div>
      </div>
    </div>
  </div>
     </div>     

      </div>
    )
  }
}

export default HomePage