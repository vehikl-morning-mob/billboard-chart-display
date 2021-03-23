import React from "react"




export function SongEntry({ song}){

    return (
        <div style={{display: 'flex', padding: '2rem 0.5rem'}}>
            <img src={song.cover} height={150} />
            <div style={{marginLeft: '1rem'}}>
                <p>Title: {song.title}</p>
                <p>Artist: {song.artist}</p>
            </div>
        </div>
    )
}