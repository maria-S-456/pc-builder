import React from 'react';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';

const Authpage = () => {
	return(
		<>
			
			<Container>
				<Row>
					<Col>
						<Form className='my-10'>
							<h2>Login</h2>
							<Form.Group controlId="formEmailLogin">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter email address" />					
								<Form.Control type="password" placeholder="Enter password" />								
							</Form.Group>
							<Button variant="primary" type="submit">Login</Button>
						</Form>
					</Col>
					<Col>
						<Form>
							<h2>Sign Up</h2>
							<Form.Group controlId="formEmailSignup">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter email address" />
								<Form.Control type="password" placeholder="Enter password" />
							</Form.Group>
							<Button variant="primary" type="submit">Sign Up</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Authpage;