import React from 'react'
import { Carousel } from 'react-bootstrap'


function Carrosel(props) {

    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="bannerHome d-block w-100 "
                        src={props.banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="bannerHome d-block w-100 "
                        src={props.banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="bannerHome d-block w-100 "
                        src={props.banner3}
                        alt="Second slide"
                    />
                </Carousel.Item>
            
                
            </Carousel>
        </>
    )
}

export default Carrosel