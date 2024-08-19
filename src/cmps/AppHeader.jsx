import { SvgIcon } from "./Svgicon.jsx"
import "../assets/style/cmps/_AppHeader.scss"

export function AppHeader() {
    return (
        <>
            <h1>header</h1>
            <SvgIcon iconName={"language"}></SvgIcon>
            <SvgIcon iconName={"guestfavorite"}></SvgIcon>
            <p>TEST TEST TEST TEST</p>
        </>
    )
}