export function  NavBar () {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__logo">
                    <a href="/stay">Airbnb</a>
                </div>
                <div className="navbar__links">
                    <a href="/stays">Stays</a>
                    <a href="/experiences">Experiences</a>
                    <a href="/online-experiences">Online Experiences</a>
                </div>
            </div>
        </nav>
    )
}
