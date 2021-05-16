import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Listing from './Listing';
import Display from './Display';

const Cpupage = (props) =>{
	const [partId, setPartId] = useState("");
	console.log(props)
	return (
		<>
		<h2>CPUs</h2>
		<Row>
			<Col>
				<Display partId={partId} products={props.prod} />			
			</Col>
			<Col>
				<Listing setPartId={setPartId} products={props.prod} partType="cpu" />
			</Col>
		</Row>
		</>
	)
}

export default Cpupage;