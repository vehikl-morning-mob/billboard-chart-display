import './App.css';
import {useEffect, useState} from 'react';
import {SongEntry} from "./SongEntry";

function App() {
    const [songs, setSongs] = useState([]);

    useEffect(async () => {
        const response = await fetch('http://localhost:3001')
        const payload = await response.json();
        console.log(payload.songs)

        const mapSongs = payload.songs.map(song => ({
            rank: song.rank,
            title: song.title,
            artist: song.artist,
            cover: song.cover
        }))

        setSongs(mapSongs)

    }, [])

    return (
        <>
            {
                songs.map(song => <SongEntry key={song.rank} song={song} />)
            }
        </>
    );
}

export default App;
