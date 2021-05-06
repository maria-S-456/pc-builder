import Mybuildlisting from './Mybuildcomponents/mybuildlisting';
import Mybuilddisplay from './Mybuildcomponents/mybuilddisplay';
import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';

const Mybuildpage = (props) => {
	const [partId, setPartId] = useState("");
	return (
		<>
		<h1>My Build Page</h1>
		<Row>
			<Col>
				<h3>Part Details</h3>
				
				<Mybuilddisplay />			
			</Col>
			<Col>
				<h3>My Parts</h3>
				<Mybuildlisting />
			</Col>
		</Row>
		</>
	)
}

export default Mybuildpage;