import React from 'react'
import { Carousel } from 'react-bootstrap'
import  Banner1  from '../../../assets/imgs/banners/banner-1.png'
import  Banner2  from '../../../assets/imgs/banners/banner-2.png'
import  Banner3  from '../../../assets/imgs/banners/banner-3.png'

function Banner(props) {

    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Banner