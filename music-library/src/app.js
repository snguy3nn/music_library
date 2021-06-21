import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySongs';

class App extends Component {
    state = {
        songs: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/music/')
        .then(response => {this.setState({
            songs: response.data
        })});
    }

    render () {
        return (
            <div>
                <DisplaySongs songs={this.state.songs} />
            </div>
        );
    }
}

export default App;