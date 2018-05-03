import React, { Component } from 'react'
import axios from 'axios'
import NewPhotoFormPage from './NewPhotoFormPage';

class PhotoPage extends Component {

    state = {
      user: {
        userName: 'Tyler'
      },
      photos: []
    }
  
    componentDidMount() {
      const userId = this.props.match.params.userId
      console.log(userId)
      axios.get(`/api/users/${userId}`)
        .then(res => {
          console.log(res.data)
          this.setState({
            user: res.data,
            photos: res.data.photos
          })
        })
    }
  
  
    deletePhoto = (photos) => {
      const userId = this.props.match.params.userId
      console.log("hitting photo id", photos)
      axios.delete(`/api/users/${userId}`)
        .then((response) => {
          console.log(response)
        })
    }
  
    handleChange = (changedPhoto, event) => {
      const photos = [...this.state.photos]
      const newPhotos = photos.map((photo) => {
        if (photo._id === changedPhoto._id) {
          photo[event.target.name] = event.target.value
        }
        return photo
      })
      this.setState({ photos: newPhotos })
    }
  
    updatePhoto = (photo) => {
      const userId = this.props.match.params.userId
      console.log("UPDATING PHOTO IN DB")
      console.log("User Id being Updated", userId)
      axios.patch(`/user/${userId}`, { photo })
        .then(res => {
          this.setState({ photos: res.data.photos })
        })
    }

    createNewPhoto = (newPhoto) => {
      const userId = this.props.match.params.userId
      axios.post(`/users/${userId}`, newPhoto)
        .then((res) => {
          console.log("RESPONSE FROM NEW photo", res.data.photo)
          this.setState({ photos: res.data.photos.reverse()})
        })
    }
  
    render() {
      console.log("RENDERING", this.state.user)
      const photos = this.state.photos.map((photo, i) => {
        return (
         <div>
          <div>
            <input
              type="text"
              name="title"
              value={photo.title}
              onBlur={() => this.updatePhoto(photo)}
              onChange={(event) => this.handleChange(photo, event)} />
  
            <textarea
              name="description"
              value={photo.description}
              onBlur={() => this.updatePhoto(photo)}
              onChange={(event) => this.handleChange(photo, event)} />
      
  
            <button class="waves-effect waves-light btn center-align" 
              onClick={() => { this.deletePhoto(photo._id) }}>
              Delete
            </button>
         </div>
         </div>
        )
      })
  
      return (
        <div class="form">
          <div>
            <h1 class="header">{this.state.user.userName}'s Photos</h1>
            <button  class="waves-effect waves-light btn center-align" onClick={this.createNewPhoto} 
            to={`/user/${this.props.match.params.userId}/photo`}> New </button>
          </div>
          
            {photos}
            <NewPhotoFormPage userId={this.props.match.params.userId}
            createNewPhoto={this.createNewPhoto}/>
        </div>
      )
    }
  }

  export default PhotoPage