import Listing from './Dashboardmenu/Listing';
import Display from './Dashboardmenu/Display';
import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';

const Mybuildpage = (props) => {
	const [partId, setPartId] = useState("");
	return (
		<>
		<h1>My Build Page</h1>
		<Row>
			<Col>
				<h1>Display</h1>			
			</Col>
			<Col>
				<h1>Listing</h1>
			</Col>
		</Row>
		</>
	)
}

export default Mybuildpage;