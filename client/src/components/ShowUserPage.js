import React, { Component } from 'react';

class ShowUserPage extends Component {
    render() {
        return (
            <div>
               <h1 class="header">{this.state.user.userName}'s Photos</h1> 
            </div>
        );
    }
}

export default ShowUserPage;