import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Listing from './Listing';
import Display from './Display';

const Psupage = (props) =>{
	const [partId, setPartId] = useState("");
	return (
		<>
		<h2>PSUs</h2>
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

export default Psupage;