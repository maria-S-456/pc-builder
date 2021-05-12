import React, {useState} from 'react'
import axios from 'axios'

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
	
	return(
		<div>
			<h2>Register</h2>
			{
				confirmReg ?
				<h4 style={{color: "green"}}>{confirmReg}</h4>
				: null
			}
			<form onSubmit={register}>
				<div>
					<label>Username</label>
					{
						errs.username ?
						<span className="error-text">{errs.username.message}</span>
						: null
					}
					<input type="text" name="username" value={user.username} onChange={(e) => handleChange(e)} />
				</div>
				<div>
					<label>Email</label>
					{
						errs.email ?
						<span className="error-text">{errs.email.message}</span>
						: null
					}
					<input type="email" name="email" value={user.email} onChange={handleChange} />
				</div>
				<div>
					<label>Password</label>
					{
						errs.password ?
						<span className="error-text">{errs.password.message}</span>
						: null
					}
					<input type="password" name="password" value={user.password} onChange={handleChange} />
				</div>
				<div>
					<label>Confirm Password</label>
					{
						errs.confirmPassword ?
						<span className="error-text">{errs.confirmPassword.message}</span>
						: null
					}
					<input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
export default Registeruser