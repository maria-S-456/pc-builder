import React, {useState} from 'react';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';
//import PropTypes from 'prop-types';
import axios from 'axios'
import {navigate} from '@reach/router'

function Authpage({setLoggedIn}){


	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const login = event => {
		event.preventDefault();
		axios.post("http://localhost:5000/api/users/login", 
		{email, password},
		{
			withCredentials: true
		}
		)
		.then((res) => {
			console.log(res);
			navigate("/main")
		})
		.catch(err => {
			console.log(err.response);
			setErrorMessage(err.response.data.msg)
		})
	} 
	
	return(
		<>
			
			<Container>
				<Row>
					<Col>
						 /*<p>{errorMessage ? errorMessage : ""}</p> */
						<Form className='my-10' /*onSubmit={login} */>
							<h2>Login</h2>
							
								<label>Email</label>
								<input id="loginemail" type="text" name="email" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} />					
								<input id="loginpassword" type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />							
							<Button variant="primary" type="submit">Login</Button>
						</Form>
					</Col>					
				</Row>
			</Container>
		</>
	)
}
export default Authpage;