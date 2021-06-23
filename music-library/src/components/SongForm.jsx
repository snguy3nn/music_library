import React, { Component } from 'react';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                <label>Artist</label>
                <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
                <label>Album</label>
                <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
                <label>Genre</label>
                <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} />
                <label>Release Date</label>
                <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date} />
            </form>
        );
    }
}

export default SongForm;