import Mybuildlisting from './Mybuildcomponents/mybuildlisting';
import Mybuilddisplay from './Mybuildcomponents/mybuilddisplay';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Row, Col} from 'react-bootstrap';

const Mybuildpage = () => {
	//const [partId, setPartId] = useState("");
/*
	const [users, setUsers] = useState([])

	useEffect(() => {
		const fetchUsers = async () => {
			const {data} = await axios.get('/api/users')

			setUsers(data)
		}

		fetchUsers()
	}, [])
*/
	return (
		<>
		<h1>My Build Page</h1>
		<Row>
			<Col>
				<h3>Part Details</h3>
				
				<Mybuilddisplay  />			
			</Col>
			<Col>
				<h3>My Parts</h3>
				<Mybuildlisting  />
			</Col>
		</Row>
		</>
	)
}

export default Mybuildpage;