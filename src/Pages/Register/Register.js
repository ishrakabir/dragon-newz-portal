import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        console.log(email, name, photoUrl, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                
            })
            .catch(error =>
                console.error(error))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='mb-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter  Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>PhotoURL <span ><small>(optional)</small></span></Form.Label>
                    <Form.Control name='photoUrl' type="text" placeholder="Photo URL" />
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
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;