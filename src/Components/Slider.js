import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'shariyar1.PNG';

function UncontrolledExample() {
    const img1 = 'shariyar1.PNG'
    return (
        <Container>
            <Carousel style={{margin: '10px'}}>
                <Carousel.Item>
                    <img src={img1} style={{ height: '450px', width: '1200px' }} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='shariyar2.PNG' style={{ height: '450px', width: '1200px' }}/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src='shariyar3.PNG' style={{ height: '450px', width: '1200px' }}/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src='shariyar5.PNG' style={{ height: '450px', width: '1200px' }}/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default UncontrolledExample;