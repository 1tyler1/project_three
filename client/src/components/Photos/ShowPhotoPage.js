import React, { Component } from 'react';

class ShowPhotoPage extends Component {
    render() {
        return (
            <div>
                <h1 class="header">{this.state.user.userName}'s Account</h1>
                <ShowPhotoPage userId={this.props.match.params.userId} />
            </div>
        );
    }
}

export default ShowPhotoPage;