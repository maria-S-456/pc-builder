import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import Listing from './Listing';
import Display from './Display';

const Testpartpage = (props) =>{
	const [partId, setPartId] = useState("");

	return (
		<>
		<h2>Test Part Page</h2>
		<Row>
		<Col>
			<Display partId={partId} products={props.prod} />			
		</Col>
		<Col>
			<Listing setPartId={setPartId} products={props.prod} partType="psu" />
		</Col>
		</Row>
		</>
	)
}

export default Testpartpage;