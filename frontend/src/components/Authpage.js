import React, {useState} from 'react';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';
import PropTypes from 'prop-types'

async function loginUser(credentials){
	return fetch('http://localhost:5000/auth',{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
	.then(data => data.json())
}

const Authpage = ({setToken}) => {
	const [username, setUsername] = useState()
	const [password, setPassword] = useState()

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password
		});
		setToken(token)
	}

	return(
		<>
			
			<Container>
				<Row>
					<Col>
						<Form className='my-10' onSubmit={handleSubmit}>
							<h2>Login</h2>
							
								<label>Email</label>
								<input type="loginemail" placeholder="Enter email address" onChange={e => setUsername(e.target.value)} />					
								<input id="loginpassword" type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />								
							
							<Button variant="primary" type="submit">Login</Button>
						</Form>
					</Col>					
				</Row>
			</Container>
		</>
	)
}

Authpage.propTypes = {
	setToken: PropTypes.func.isRequired
}

export default Authpage;