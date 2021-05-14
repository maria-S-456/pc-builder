import React, {useState} from 'react';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios'
import {navigate} from '@reach/router'
import Registeruser from './Registeruser'
import {useHistory} from 'react-router-dom'

const Authpage = props => {	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	let history = useHistory();
	const login = event => {

		event.preventDefault();		
		axios.post("http://localhost:5000/api/users/login", 
		{
			email, password
		},
		{
			withCredentials: true
		}
		)
		.then((res) => {
			console.log(res);

			history.push("/main")	
		})
		.catch((err) => {
			console.log(err);
			setErrorMessage(err)
		})
	} 
	const btnStyle = {
		backgroundColor: '#6246C1',
		border: 0,
		borderRadius: 0,

	}
	return(
		<>
			
			<Container>
				<Row>
					<Col className='col-md-2'></Col>
					<Col className='col-md-3 shadow-lg formColor'>
						<h2>Login</h2>
						<Form onSubmit={login} className="p-3">														
							<Row>
								<label>Email</label>
								<input className="form-control" id="loginemail" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />					
							</Row>
							<Row>
								<label>Password</label>
								<input className="form-control" id="loginpassword" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />							
							</Row>
							<Row className='mt-4'>
								<Button className="form-control" style={btnStyle} type="submit">Login</Button>
							</Row>
						</Form>
					</Col>
					<Col className='col-md-2'></Col>
					<Col className='col-md-3 shadow-lg formColor'>	
						<Registeruser />	
					</Col>
					<Col className='col-md-2'></Col>			
				</Row>
			</Container>
		</>
	)
}
export default Authpage;