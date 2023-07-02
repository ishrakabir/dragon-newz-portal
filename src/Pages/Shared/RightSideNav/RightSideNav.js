import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical >
                <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login via Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login via Github</Button>
            </ButtonGroup>
            <ListGroup className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaDiscord></FaDiscord> Discord</ListGroup.Item>
            </ListGroup>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;