import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  brand1  from '../../../Assets/Brands/brand1.png'
import  brand2  from '../../../Assets/Brands/brand2.png'
const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarousel;