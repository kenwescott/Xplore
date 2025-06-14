import Carousel from 'react-bootstrap/Carousel';
import './BackgroundCarrousel.css';

function BackgroundCarousel() {
  return (
    <div className="background-carousel">
      <Carousel controls={false} indicators={false} fade interval={7000}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={`${process.env.PUBLIC_URL}/images/slide4.jpg`}
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={`${process.env.PUBLIC_URL}/images/slide2.jpg`}
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={`${process.env.PUBLIC_URL}/images/slide3.webp`}
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BackgroundCarousel;
