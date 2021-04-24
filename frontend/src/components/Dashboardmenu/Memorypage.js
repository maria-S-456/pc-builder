import React, {useState} from 'react';
import {Row, Col, ListGroup} from 'react-bootstrap';
import Listing from './Listing';
import Display from './Display';

const Memorypage = (props) =>{
	const [partId, setPartId] = useState("");
	return (
		<>
		<h2>Memory</h2>
		
		<Row>
			<Col>
				<Display partId={partId} products={props.prod} />			
			</Col>
			<Col>
				<Listing setPartId={setPartId} products={props.prod} partType="memory" />
			</Col>
		</Row>
		
		</>
	)
}

export default Memorypage;