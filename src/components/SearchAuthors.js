import { useEffect, useState } from "react";
import { getAllAuthors } from "../services/BiblioService";
import Card from "./Card";

export default function SearchAuthors() {
    let [authors, setAuthors] = useState([]);
    let [keyword, setKeyword] = useState({name: '', technology: ''});

    useEffect(() => {
            getAllAuthors()
            .then(data => {
                setAuthors(data);
            })
    }, [])

    let result = authors.filter(a => {
        return a.name.toLowerCase().includes(keyword.name) && 
        a.technology.toLowerCase().includes(keyword.technology);
    })

    let list = result.map(a => <Card key={a.id} {...a} />) 

    function changeHandler(event) {
        let inputName= event.target.name;
        let inputValue = event.target.value.toLowerCase();
        console.log(inputName, '=', inputValue);

      
        setKeyword(os => ({
            ...os,
            [inputName]: inputValue
        }))
    }

    return (
        <div className="authors-list"> 
            <fieldset>
                <legend>Recherche d'auteurs</legend>
                <div>
                    <label htmlFor="name-input">Par nom : </label>
                    <input id="name-input" type="text"  onChange={changeHandler} name="name" />
                </div>
                <div>
                    <label htmlFor="technology-input">Par Technology : </label>
                    <input id="technology-input" type="text"  onChange={changeHandler}  name="technology" />
                </div>
            </fieldset>
            <div>
                {list}
            </div>
        </div>
    )
}