import React from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

const Header =(props) =>{
	const logout = (e) => {
		e.preventDefault();
		axios.post("http://localhost:5000/api/users/logout", {
			// no body required for this request
		}, {
			withCredentials: true
		})
		.then((res) => {
			console.log(res.data);
			navigate("/auth");
		})
		.catch(err => {
			console.log(err)
		})
	}
	return (
		<>
		<h1>PC Builder</h1>
		<button onClick={(e) => logout(e)}>Logout</button>
		</>
	)
}
export default Header