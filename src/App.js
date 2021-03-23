import './App.css';
import {useEffect, useState} from 'react';

function App() {
    const [songs, setSongs] = useState([]);

    useEffect(async () => {
        const response = await fetch('http://localhost:3001')
        const payload = await response.json();
        console.log(payload.songs)
        setSongs(payload.songs);
    }, [])

    return (
        <>
            {
                songs.map(song => {
                    return (
                        <div key={song.rank}>
                            <p>{song.title}</p>
                            <p>{song.artist}</p>
                            <img src={song.cover} /><br></br>
                        </div>
                    );
                })
            }
        </>
    );
}

export default App;
