import { Link, Outlet, useNavigate } from "react-router-dom";

export default function BiblioLayout() {
    let navigate = useNavigate();
    return(
        <div className="biblio-layout">
            <h1>Gestion de bibliothèque</h1>
            <nav>
                <Link to=".">Home</Link> -  
                <Link to="authors"> Liste des auteurs</Link>

                <button onClick={()=> navigate('search-author')}> Recherche d'auteurs </button>
            </nav>

            <Outlet />

        </div>
    )
}