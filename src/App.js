import './App.css';
import {useEffect, useState} from 'react';
import {SongEntry} from "./SongEntry";

function App() {
    const [songs, setSongs] = useState([]);
    const [name, setName ] = useState('hot-100');
    const [date, setDate] = useState('1993-01-01');


    useEffect(async () => {
        const response = await fetch(encodeURI(`http://localhost:3001?name=${name}&date=${date}`))
        const payload = await response.json();
        console.log(payload.songs)

        const mapSongs = payload.songs.map(song => ({
            rank: song.rank,
            title: song.title,
            artist: song.artist,
            cover: song.cover
        }))

        setSongs(mapSongs)

    }, [name, date])

    return (
        <>
            <input type="text" title="name" onChange={e => setName(e.target.value)}/>
            <input type="text" title="date" onChange={e => setDate(e.target.value)}/>

            {songs.map(song => <SongEntry key={song.rank} song={song} />)}
        </>
    );
}

export default App;
