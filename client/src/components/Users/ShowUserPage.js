import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import UpdateUserFormPage from './UpdateUserFormPage';

class ShowUserPage extends Component {
  state = {
    users: [],
    user: {
      userName: '',
      password: '',
    },
    userRemoved: false,
  };

  componentWillMount() {
    if (this.props.match.params) {
      const { userId } = this.props.match.params;
      axios.get(`/api/users/${userId}`).then(res => {
        this.setState({ user: res.data });
      });
    }
  }

  updateUser = updatedUser => {
    const userId = this.state.user._id;
    axios
      .patch(`/api/users/${userId}`, {
        user: updatedUser,
      })
      .then(res => {
        const resUser = res.data;
        this.setState({ user: resUser });
      });
  };

  deleteUser = deletedUser => {
    const userId = this.state.user._id;

    axios.delete(`/api/users/${userId}`).then(() => {
      this.setState({ userRemoved: true });
    });
  };

  handleDeleteUser = e => {
    e.preventDefault();
    this.deleteUser();
  };

  render() {
    if (this.state.userRemoved) return <Redirect to={`/`} />;

    return (
      <div class="form">
        <div>
          <h3>Account Information</h3>
          <h6>{this.state.user.userName}</h6>
          <div>
          <div class="center">
              <div>
                <Link to={`/user/${this.props.match.params.userId}/photos`}>
                  <button className="waves-effect waves-light btn center-align btn-small center">
                    Photos
                  </button>
                </Link>
              </div>
             
                <Link to={`/users/${this.props.match.params.userId}/weight`}>
                
                  <button className="waves-effect waves-light btn center-align btn-small center">
                    Weight
                  </button>
                 
                </Link>
             
            </div>
          </div>
        </div>
        <UpdateUserFormPage
          user={this.state.user}
          updateUser={this.updateUser}
        />
       
          <div className="center">
            <button
              onClick={this.handleDeleteUser}
              className="waves-effect waves-light btn center-align btn-small">
              Delete User
            </button>
          </div>
        </div>
     
    );
  }
}

export default ShowUserPage;
