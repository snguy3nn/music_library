

const DisplaySongs = (props) => {
    return (
    <div>
        <table className="table table-hover">
            <tr>
                <th className="header">Title</th>
                <th className="header">Album</th>
                <th className="header">Artist</th>
                <th className="header">Release Date</th>
                <th className="header">Options</th>
            </tr>
            {props.songs.map(song => {
                return(
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.release_date}</td>
                        <td><button className="mr-2"
                            onClick={()=> this.deleteSong(song.id)} variant='danger'
                            >Delete</button>
                        </td>
                    </tr>
                )
            })}
        </table>
    </div>  
    );
}
 
export default DisplaySongs;