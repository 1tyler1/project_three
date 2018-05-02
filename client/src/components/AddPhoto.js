import React, { Component } from 'react';
import axios from 'axios'

class AddPhoto extends Component {

    state = {
       users: [],
        photos: []
      }

    createNewPhoto = (photo) => {
        const userId = this.props.match.params.userId
        axios.post(`/users/${userId}`)
          .then((res) => {
            console.log("RESPONSE FROM NEW photo", res.data.photo)
            this.setState({ photos: res.data.photos.reverse()})
          })
      }

    render() {
        const photos = this.state.photos; 
        
        const photo = this.state.photo;
        {
      
        return (
            <div>
                  <input
              type="text"
              name="title"
              value={photos.title}
            //   onBlur={() => this.updatePhoto(photo)}
              onChange={(event) => this.handleChange(photo, event)} />
  
            <textarea
              name="description"
              value={photos.description}
            //   onBlur={() => this.updatePhoto(photo)}
              onChange={(event) => this.handleChange(photo, event)} />
      
  
            <button class="waves-effect waves-light btn center-align" 
              onClick={() => { this.deletePhoto(photos._id) }}>
              Delete
            </button>
            </div>
        );
    }
}

}

export default AddPhoto;