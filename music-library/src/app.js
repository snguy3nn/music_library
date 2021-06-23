import React, { Component } from 'react';
import axios from 'axios';
import SongForm from './components/SongForm';
import SearchBar from './components/SearchBar';
import MusicTable from './components/MusicTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        songs: []
        }
    }

    componentDidMount(){
        this.allSongs();
    }

    allSongs = async () => {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data,
        })
    }

    delete = (id) => {
        axios.delete(`http://127.0.0.1:8000/music/${id}`)
        .then(() => this.setState({ status: 'Delete succesful' }))
        window.location.reload();
    }

    render () {
        return (
            <div>  
                <SongForm songForm={this.songForm} />
                <SearchBar />
                <MusicTable songs={this.state.songs} delete={this.delete} />
            </div>
        );
    }
}

export default App;