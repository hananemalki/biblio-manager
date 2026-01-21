export default function Card({name, yearBorn, country, technology, photo}) {
    let path = '/photos/authors/'
    return (
        <div className="card">
            <img src={`${path}${photo}`} alt={name}/>
            <div className="card-content">
                <h3>{name}</h3>
                <p><strong>Année de naissance :</strong> {yearBorn}</p>
                <p><strong>Pays :</strong> {country}</p>
                <p><strong>Technologie :</strong> {technology}</p>
            </div>
        </div>
    )
}