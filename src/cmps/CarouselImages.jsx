import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export function CarouselImages() {
    return (
        <Carousel className='carousel-container' showArrows={true} showThumbs={false} infiniteLoop showStatus={false}    >
            <div className='card-image' >
                <img src="https://a0.muscache.com/im/pictures/3b683927-42d5-4883-990d-26904f1e6532.jpg?im_w=720" />
            </div>
            <div className='card-image' >
                <img src="https://a0.muscache.com/im/pictures/a3e9e1a1-ebed-4d2e-a00a-4b1a81015d2d.jpg?im_w=720" />
            </div>
            <div className='card-image' >
                <img src="https://a0.muscache.com/im/pictures/86655972/f708e3db_original.jpg?im_w=720" />
            </div>
        </Carousel>
    )
}