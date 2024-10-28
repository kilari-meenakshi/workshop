import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Carousel.css';
function Corousel() {
  return (
    <Carousel className="full-page-carousel" interval={3000}> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6493cebc0a00ece1.jpg?q=20 "
          
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f15976713215171a.jpg?q=20"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/126619f56d1f3607.jpg?q=20"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;
