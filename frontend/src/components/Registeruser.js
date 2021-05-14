import React, {useState} from 'react'
import axios from 'axios'
import {Row, Col, Form} from 'react-bootstrap';

const Registeruser = props => {
	const [confirmReg, setConfirmReg] = useState("");
	const [errs, setErrs] = useState({});

	// using a signle state object to hold all data
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	})
	// using a single function to update the state object
	// we can use the input's name attribute as the key in to the object
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}
	const register = e => {
		e.preventDefault();
		axios.post("http://localhost:5000/api/users/register",
		user,  // the user state is already an object with the correct keys and values!
		{

			withCredentials: true
		})
		.then(res => {
			console.log(res.data);

			// when we successfully created the account, reset state for registration form
			// we do this if we are NOT  navigating automatically away from the page
			setUser({
				username: "",
				email: "",
				password: "",
				confirmPassword: ""
			})
			setConfirmReg("Thank you for registering, you can now log in!");
			setErrs({}) // Remember to reset errors state if it was successful
		})
		.catch((errs) => {
			console.log(errs);
			setErrs(errs.response.data.errors)
		})
		}
		const btnStyle = {
		backgroundColor: '#6246C1',
		border: 0,
		borderRadius: 0,
		color: '#E8E8E8'

	}
	
	return(
		<div>
			<h2>Register</h2>
			{
				confirmReg ?
				<h4 style={{color: "green"}}>{confirmReg}</h4>
				: null
			}
			<Form onSubmit={register} className="p-3">
				<Row>
					<label>Username</label>
					{
						errs.username ?
						<span className="error-text">{errs.username.message}</span>
						: null
					}
					<input className="form-control" type="text" name="username" value={user.username} onChange={(e) => handleChange(e)} />
				</Row>
				<Row>
					<label>Email</label>
					{
						errs.email ?
						<span className="error-text">{errs.email.message}</span>
						: null
					}
					<input className="form-control" type="email" name="email" value={user.email} onChange={handleChange} />
				</Row>



				<Row>
					<label>Password</label>
					{
						errs.password ?
						<span className="error-text">{errs.password.message}</span>
						: null
					}
					<input className="form-control" type="password" name="password" value={user.password} onChange={handleChange} />
				</Row>
				<Row>
					<label>Confirm Password</label>
					{
						errs.confirmPassword ?
						<span className="error-text">{errs.confirmPassword.message}</span>
						: null
					}
					<input className="form-control" type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
				</Row>
				<Row className="mt-4">
					<button style={btnStyle} className="form-control" type="submit">Register</button>
				</Row>
			</Form>
		</div>
	)
}
export default Registeruser