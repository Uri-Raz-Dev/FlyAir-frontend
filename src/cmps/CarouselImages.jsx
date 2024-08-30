import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SvgIcon } from './Svgicon.jsx';
import { PrevArrow } from './PrevArrow.jsx';

export function CarouselImages({imgs}) {
    
    
    
    // Custom right arrow button
    function renderArrowNext  (clickHandler, hasNext) {
        console.log(` next: ${hasNext}`);
        return(
            
            hasNext && 
            <div className=''>
      <button
        type="button"
        className="custom-next-button next  "
        onClick={(e) => {
            e.stopPropagation() // Prevent the click from propagating
            clickHandler()
        }}
        >
        {/* &#9654; */}
         {/* Right arrow symbol or use any icon */}
        <SvgIcon iconName={'arrowNext'}/>
      </button>

    </div>

)
}


function renderArrowPrev  (clickHandler, hasPrev) {
    console.log(` prev: ${hasPrev}`);
    
    return(
        hasPrev && (
            <div className=''>

          <button
            type="button"
            className="custom-prev-button  prev "
            onClick={(e) => {
                e.stopPropagation() // Prevent the click from propagating
                clickHandler()
            }}
            >
            <SvgIcon iconName={'arrowPrev'}/>
            {/* &#9664; Left arrow symbol or use any icon */}
          </button>
            </div>
        )
        
    )
}
    return (
        <Carousel className='carousel-container' renderArrowNext={ renderArrowNext} renderArrowPrev={renderArrowPrev}   showThumbs={false} infinire={false}  showStatus={false}    >
            <div className='card-image' >
                <img src={imgs[0]} />
                <div> <SvgIcon iconName={'heart'}/></div>
                {/* <button onClick={(ev)=> ev.stopPropagation()} className='arrow  '><SvgIcon iconName={'arrow'}/></button> */}
            </div>
            <div className='card-image' >
                <img src={imgs[1]} />
                <div> <SvgIcon iconName={'heart'}/></div>
            </div>
            <div className='card-image' >
                <img src={imgs[2]} />
                <div> <SvgIcon iconName={'heart'}/></div>
            </div>
            {/* <div className='card-image' >
                <img src="data:image/jpeg;base64,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" /> */}
                {/* <div> <SvgIcon iconName={'heart'}/></div> */}
            {/* </div> */}
        </Carousel>
    )
}