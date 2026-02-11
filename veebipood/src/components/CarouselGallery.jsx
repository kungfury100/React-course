import Carousel from 'react-bootstrap/Carousel';

function CarouselGallery() {
  return (
    <Carousel>
     <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/240/500/200"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/241/500/200"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/242/500/200"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGallery;