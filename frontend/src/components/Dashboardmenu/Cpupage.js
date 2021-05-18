import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Listing from './Listing';
import Display from './Display';

const Cpupage = (props) =>{
	const [partId, setPartId] = useState("");
	const [buildid, setBuildid] = useState("");
	//console.log(partId);
	return (
		<>
		<h2>CPUs</h2>
		<Row>
			<Col>
				<Display setBuildid={setBuildid} buildid={buildid} partId={partId} products={props.prod} mybuilds={props.mybd} />			
			</Col>
			<Col>
				<Listing setPartId={setPartId} products={props.prod} partType="cpu" />
			</Col>
		</Row>
		</>
	)
}

export default Cpupage;