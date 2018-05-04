import React, { Component } from 'react';

class NewPhotoFormPage extends Component {

  state = {
    updatedPhoto: {},
  };

  static getDerivedStateFromProps(nextProps, prevState){
    const futureState = {
        updatedUser: nextProps.user
      }
      return futureState
  }

  updateUserfunction = (event) => {
      event.preventDefault()
    this.props.updateUser(this.state.updatedUser)
  }

  handleUpdateUserChange = event => {
    event.preventDefault();
    const user = { ...this.state.updatedUser };
    user[event.target.name] = event.target.value;
    this.setState({ updatedUser: user });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.newPhotofunction}>
          <div>
          <div className="center">
            <button className="waves-effect waves-light btn center-align btn-small">
              New
            </button>
          </div>
            <label htmlFor="Title">Title</label>
            <input
              onChange={this.handleUpdatePhotoTitleChange}
              name="Title"
              type="text"
              value={this.state.updatedPhoto.title}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              onChange={this.handleUpdatePhoto}
              name="description"
              type="text"
              value={this.state.updatedPhoto.description}
            />
          </div>
       
        </form>
      </div>
    );
  }
}


export default NewPhotoFormPage;