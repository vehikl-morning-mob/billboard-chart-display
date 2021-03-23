import './App.css';
import {useEffect} from 'react';

function App() {
    useEffect(async () => {
        const response = await fetch('http://localhost:3001')
        const payload = await response.json();
        console.log(payload);
    }, [])

    return (
        <>
            <p>This is our app</p>
        </>
    );
}

export default App;
