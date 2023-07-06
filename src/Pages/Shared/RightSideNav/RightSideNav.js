import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const RightSideNav = () => {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { providerLogin } = useContext(AuthContext);
    const handleLogin = () => {
        providerLogin(provider)
        .then((result) => {
            const user = result.user; 
            console.log(user);
            navigate(from, { replace: true });
        })
            .catch(error => {
                console.error(error);
        })
    }
    return (
        <div>
            <ButtonGroup vertical >
                <Button onClick={handleLogin} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login via Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login via Github</Button>
            </ButtonGroup>
            <ListGroup className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup.Item className='mb-2 user-select-none'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2 user-select-none'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-2 user-select-none'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2 user-select-none'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-2 user-select-none'><FaDiscord></FaDiscord> Discord</ListGroup.Item>
            </ListGroup>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;