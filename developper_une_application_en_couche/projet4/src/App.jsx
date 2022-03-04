import {React, useState} from 'react';

const App = (props) => {
    const [listes, setListes] = useState([]);
    const [liste, setListe] = useState("");

    const handleChangeListe = (evt) => {
        setListe(evt.target.value);
    }

    return (
        <div>
            <div>
                <ul>
                    {listes.map((a, i) => (
                        <li key={i}>{a}</li>
                    ))}
                </ul>
            </div>
            <input type="text" value={liste} onChange={handleChangeListe}/>

            <button onClick={() => setListes((listes) => listes.concat(liste))}>
                add
            </button>
        </div>
    );
}

export {App};