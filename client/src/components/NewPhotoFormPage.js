import React, { Component } from 'react';

class NewPhotoFormPage extends Component {
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

export default NewPhotoFormPage;