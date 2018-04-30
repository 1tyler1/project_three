import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class HomePage extends Component {
  render(){
    return (
      <div>

          <Link to='/login'>Login Link</Link>

      </div>
    )
  }
}

export default HomePage