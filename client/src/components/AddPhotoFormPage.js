import React, { Component } from 'react';


class AddPhoto extends Component {
    state= {
        newPhoto: {}
    }


      handleChange = (event) => {
          event.preventDefault()
        const newPhoto = {...this.state.newPhoto}
        newPhoto[event.target.name] = event.target.value
        console.log('Handle change: ', newPhoto.title)
        this.setState({ newPhoto })
      }

   submitNewPhoto = (event) => {
       event.preventDefault()
        this.props.createNewPhoto(this.state.newPhoto)
   }  
   

    render() {
      
      
        return (
            <div>
                  <input
              type="text"
              name="title"
           
      
              onChange={this.handleChange} />
  
            <textarea
              name="description"
        
              onChange={this.handleChange} />
      
  
            <button class="waves-effect waves-light btn center-align" 
               onClick={this.submitNewPhoto}>
              Save
            </button>
            </div>
        );
    }
}




export default AddPhoto;