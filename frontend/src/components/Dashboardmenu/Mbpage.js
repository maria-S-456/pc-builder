import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Listing from './Listing';
import Display from './Display';

const Mbpage = (props) =>{
	const [partId, setPartId] = useState("");
	return (
		<>
		<h2>Motherboards</h2>
		<Row>
			<Col>
				<Display partId={partId} products={props.prod} />			
			</Col>
			<Col>
				<Listing setPartId={setPartId} products={props.prod} partType="mb" />
			</Col>
		</Row>
		</>
	)
}

export default Mbpage;