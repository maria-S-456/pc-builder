import Mybuildlisting from './Mybuildcomponents/mybuildlisting';
import Mybuilddisplay from './Mybuildcomponents/mybuilddisplay';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Row, Col} from 'react-bootstrap';

const Mybuildpage = props => {
	const [buildid, setBuildid] = useState("");
	//console.log(buildid);
	return (
		<>
		<h1>My Build Page</h1>
		
		<Row>
			<Col>
				<h3>Part Details</h3>				
				<Mybuilddisplay buildid={buildid} mybuilds={props.mybd}/> 			
			</Col>
			<Col>
				<h3>My Parts</h3>
				<Mybuildlisting setBuildid={setBuildid} mybuilds={props.mybd} />
			</Col>
		</Row>
		</>
	)
}

export default Mybuildpage;