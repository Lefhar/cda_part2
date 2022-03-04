import {React, useState} from 'react';

const App = (props) => {
    const [listes, setListes] = useState([]);
    const [element, setElement] = useState("");
    let url = "http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=" + element

    const handleChangesElement = (evt) => {

        setElement(evt.target.value);
        setListes([]);
        console.log(element.length)
        handleChangeArray()

    }
    const handleChangeArray = () =>{

    if(element.length>= 2){
        fetch(url).then(response => response.json().then(data => {
                console.log(data)
                setListes((listes) => listes.concat(data.results))


            }


        ))}
    }


    return (
        <div>

            <input type="text" value={element} onChange={handleChangesElement}/>



                {listes.map((a, i) => (
                    <div key={i}>
                        <img src={"http://image.tmdb.org/t/p/w185"+a.poster_path} alt={a.original_title}/> {a.original_title}

                    </div>
                ))}
        </div>
    )
        ;
}

export {App};