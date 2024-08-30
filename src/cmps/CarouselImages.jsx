import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SvgIcon } from './Svgicon.jsx';
import { PrevArrow } from './PrevArrow.jsx';

export function CarouselImages({ imgs }) {
    // Custom right arrow button
    function renderArrowNext(clickHandler, hasNext) {
        console.log(` next: ${hasNext}`);
        return (

            hasNext &&
            <div className={`custom-next-button-container ${!hasNext ? 'hide' : ''}`} >
                <button
                    type="button"
                    className="custom-next-button next"
                    onClick={(e) => {
                        e.stopPropagation() // Prevent the click from propagating
                        clickHandler()
                    }}
                >
                    {/* &#9654; */}
                    {/* Right arrow symbol or use any icon */}
                    <SvgIcon iconName={'arrowNext'} />
                </button>

            </div>

        )
    }


    function renderArrowPrev(clickHandler, hasPrev) {
        console.log(` prev: ${hasPrev}`);
        return (
            hasPrev && (
                <div className={`custom-prev-button-container ${!hasPrev ? 'hide' : ''}`}>

                    <button
                        type="button"
                        className="custom-prev-button prev"
                        onClick={(e) => {
                            e.stopPropagation() // Prevent the click from propagating
                            clickHandler()
                        }}
                    >
                        <SvgIcon iconName={'arrowPrev'} />
                        {/* &#9664; Left arrow symbol or use any icon */}
                    </button>
                </div>
            )

        )
    }
    return (
        <Carousel className='carousel-container' renderArrowPrev={renderArrowPrev}
            renderArrowNext={renderArrowNext} showThumbs={false} infinire={false} showStatus={false} selectedItem={0}    >
            <div className='card-image' >
                <img src={imgs[0]} />
                <div> <SvgIcon iconName={'heart'} /></div>
                {/* <button onClick={(ev)=> ev.stopPropagation()} className='arrow  '><SvgIcon iconName={'arrow'}/></button> */}
            </div>
            <div className='card-image' >
                <img src={imgs[1]} />
                <div> <SvgIcon iconName={'heart'} /></div>
            </div>
            <div className='card-image' >
                <img src={imgs[2]} />
                <div> <SvgIcon iconName={'heart'} /></div>
            </div>
        </Carousel>
    )
}