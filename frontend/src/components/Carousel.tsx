import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
    return (
        <Carousel fade className="banner">
            <Carousel.Item >
                <img src="../img/banner/banner1.png" className="imgbanner" />
            </Carousel.Item>
            <Carousel.Item >
                <img src="../img/banner/banner2.png" className="imgbanner" />
            </Carousel.Item>
            <Carousel.Item >
                <img src="../img/banner/banner3.png" className="imgbanner" />
            </Carousel.Item>
            {/* <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
}

export default CarouselFadeExample;