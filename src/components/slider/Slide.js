import React from 'react';
import image from './carousel.svg';
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={image} alt="img" className='slideimg'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image} alt="img" className='slideimg'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image} alt="img" className='slideimg'></img>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slide
