import React, { Component } from 'react';

class UpdateUserPage extends Component {
    render() {
        return (
            <div>
                   <form onSubmit={this.handleSignUp}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input onChange={this.handleChange} name="userName" type="text" value={this.state.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} name="password" type="text" value={this.state.password} />
          </div>
          <button class="waves-effect waves-light btn center-align" to='/user'>Sign Up</button>
        </form>
            </div>
        );
    }
}

export default UpdateUserPage;