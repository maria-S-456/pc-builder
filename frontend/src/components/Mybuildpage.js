import Mybuildlisting from './Mybuildcomponents/mybuildlisting';
import Mybuilddisplay from './Mybuildcomponents/mybuilddisplay';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Row, Col} from 'react-bootstrap';

const Mybuildpage = props => {
	const {setUserId} = props;
	return (
		<>
		<h1>My Build Page</h1>
		
		{/*<Row>

		{props.users.filter(user => user.username === 'maria').map(filteredUser => (
				<Row>
					<div key={filteredUser._id}>{filteredUser.username}</div>

				</Row>
			))}
		</Row> */}
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