import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


class PhotoPage extends Component {

  state = {
    user: {
      userName: 'Tyler'
    },
    photos: [{
      photo: 1,
      title: 'Starting weightloss!',
      description: 'Just the beginning'
    }, {
      photo: 2,
      title: 'Halfway point!!',
      description: 'Halfway through!'
    }]
  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    console.log(userId)
    axios.get(`/api/users/${userId}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          user: response.data,
          photos: response.data.photos
        })
      })
  }

  createNewPhoto = () => {
    axios.post(`/api/users/${this.state.user._id}/photos`)
      .then((res) => {
        console.log("RESPONSE FROM NEW photo", res.data)
      })
  }

  deletePhoto = (photoId) => {
    axios.delete(`/api/users/${this.state.user._id}/photos/${photoId}`)
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
    console.log("UPDATING photo IN DB")
    axios.patch(`/api/users/${this.state.user.id}/photos/${photo._id}`, { photo })
      .then(res => {
        this.setState({ photos: res.data.photos })
      })
  }

  render() {
    console.log("RENDERING", this.state.user)
    const photos = this.state.photos.map((photo, i) => {
      return (
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
    

          <button
            onClick={() => { this.deletePhoto(photo._id) }}>
            Delete photo
          </button>
       </div>
      )
    })

    return (
      <div>
        <div>
          <h1>{this.state.user.userName}'s Photos</h1>
          <button onClick={this.createNewPhoto}>New Photo</button>
        </div>
        <photoContainer>
          {photos}
        </photoContainer>
      </div>
    )
  }
}

export default PhotoPage