import React from 'react';

const MusicTable = (props) => {
    return (
    <div>
        <table className="table table-hover">
            <tr>
                <th className="header">ID</th>
                <th className="header">Title</th>
                <th className="header">Artist</th>
                <th className="header">Album</th>
                <th className="header">Genre</th>
                <th className="header">Release Date</th>
                <th className="header">Options</th>
            </tr>
            {props.songs.map(song => {
                return(
                    <tr key={song.id}>
                        <td>{song.id}</td>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td>
                            <button onClick={() => {props.delete(song.id)}}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </table>
    </div>  
    );
}
 
export default MusicTable;