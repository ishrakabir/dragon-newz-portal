import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')

            })
            .catch(error =>
                console.error(error))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='mb-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className=' mb-3'>
                    <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;