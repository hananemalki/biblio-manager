import { useEffect, useState } from "react";
import { getAllAuthors } from "../services/BiblioService";
import Card from "./Card";

export default function AuthorsList() {
    let [authors, setAuthors] = useState([]);

    let list = authors.map(a => <Card key={a.id} {...a} />)


    useEffect(() => {
        getAllAuthors()
        .then(data => {
            setAuthors(data);
        })
    }, [])

    return (
        <div className="authors-list">
            <h2>Liste des Auteurs</h2>
            <div>{list}</div>
        </div>
    )
    
}
