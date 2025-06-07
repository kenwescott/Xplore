import Carousel from 'react-bootstrap/Carousel';
import './BackgroundCarousel.css'; // We'll define styles here

function BackgroundCarousel() {
  return (
    <div className="background-carousel">
      <Carousel controls={false} indicators={false} fade interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/images/slide2.jpg"

            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/images/slide1.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/images/slide3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BackgroundCarousel;
