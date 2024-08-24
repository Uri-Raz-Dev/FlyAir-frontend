import { SvgIcon } from "./Svgicon"

export function DetailsHeader({ stay }) {
    const { _id, name, summary, type, imgurls, price, capacity, amenities, labels } = stay || {}
    const { city, country, countryCode, address, lat, lag } = stay?.location || {}
    const { fullname, imgUrl } = stay?.host || {}

    return (
        <>
            <header className="details-header">
                <h1>{name}</h1>
                <div className="add-to-favorites">
                    <div className="icon-wrapper">
                        <span><SvgIcon iconName={"share"}></SvgIcon></span>
                        <span>Share</span>
                    </div>
                    <div className="icon-wrapper">
                        <span><SvgIcon iconName={"save"}></SvgIcon></span>
                        <span>Save</span>
                    </div>
                </div>
            </header>


            <section className="details-image-list">

                <ul className="details-image-grid">

                    {
                        imgurls && imgurls.length > 0
                            ? imgurls.map((img, index) => (
                                <li key={index}><img src={img} alt="stay image" /></li>


                            ))
                            : null
                    }

                </ul>

            </section>
        </>
    )
}