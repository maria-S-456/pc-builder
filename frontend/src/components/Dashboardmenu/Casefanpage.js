import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Listing from './Listing';
import Display from './Display';

const Casefanpage = (props) =>{
	const [partId, setPartId] = useState("");
	const [buildid, setBuildid] = useState("");
	return (
		<>
		<h2>Case Fans</h2>
		<Row>
			<Col>
				<Display  setBuildid={setBuildid} buildid={buildid} partId={partId} products={props.prod} mybuilds={props.mybd} />			
			</Col>
			<Col>
				<Listing setPartId={setPartId} products={props.prod} partType="casefan" />
			</Col>
		</Row>
		</>
	)
}

export default Casefanpage;