import { svgService } from "../services/svg.service"

export function SvgIcon({ iconName }) {
    const svg = svgService.getSvg(iconName)
    return (
        <i dangerouslySetInnerHTML={{ __html: svg }}></i>
    )
}