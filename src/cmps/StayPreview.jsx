import { Link } from 'react-router-dom'

export function StayPreview({ stay }) {
return(

    <div className="card__content">
            <h3>{stay.name}</h3>
            <p>{stay.type}</p>
        </div>
)
// <div className='card-details'>
{/* <img src={stay.imageUrl} alt={stay.title} className="card__image" /> */}
    {/* </div> */}

    //     <article className="preview">
    //         <header>
    //             <Link to={`/stay/${stay._id}`}>{stay.name}</Link>

    //         </header>
    // <section className='stay-preview'>
    //     {/* <img src={stay.imgurls[0]} alt={stay.name} /> */}

    //     <pre className='preview-details'>
    //         <p> name:{stay.name}</p>
    //         <p>type: {stay.type}</p>
    //         <p> price: {stay.price}$</p>
    //     </pre>
    // </section>
    //         {/* <p>Speed: <span>{stay.speed.toLocaleString()} Km/h</span></p>
    //         {stay.owner && <p>Owner: <span>{stay.owner.fullname}</span></p>} */}

    //     </article>
}