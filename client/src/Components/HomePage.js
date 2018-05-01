import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'



class HomePage extends Component {
  render(){
    return (
     
<div class="card-style">
  <div class="center">
    <h1 class="header-margin">Progress</h1>
    <div class="card center">
      <div>
        <img src="https://i.imgur.com/RZtchTq.jpg" alt="workout"/>
      
      <div class="card-stacked">
        <div class="card-content center">
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