export default function Card({name, yearBorn, country, technology, photo}) {
    let path = `${process.env.PUBLIC_URL}/photos/authors/`
    
    return (
        <div className="card">
            <img src={`${path}${photo}`} alt={name}/>
            <div className="card-content">
                <h3>{name}</h3>
                <div className="card-info">
                    <span className="info-badge">{country}</span>
                    <span className="info-badge">{yearBorn}</span>
                </div>
                <p className="technology">{technology}</p>
            </div>
        </div>
    )
}