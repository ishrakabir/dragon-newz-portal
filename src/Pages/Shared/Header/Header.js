import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa6";
import { Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => { })
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-4">
            <Container>
                <Navbar.Brand ><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                       
                    </Nav>
                    <Nav className='align-items-center'>
                        {
                            user?.uid ?
                                <>
                                    <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
                                    <Link to='/profile'>
                                        {
                                            user?.photoURL ?
                                                <Image
                                                    style={{ height: '30px' }}
                                                    roundedCircle
                                                    src={user?.photoURL}>
                                                </Image>
                                                : <FaUser></FaUser>
                                        }
                                        <button onClick={handleLogout} type="button" className="btn btn-light ms-2">Logout</button>
                                    </Link></>
                                :
                                <>
                                    <Link to='/login'>
                                        <button onClick={handleLogout} type="button" className="btn btn-light ms-2">Login</button>
                                    </Link>
                                    <Link to='register'>
                                        <button onClick={handleLogout} type="button" className="btn btn-light ms-2">Register</button>
                                    </Link>
                                </>
                        }
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav ></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;