import React from 'react';
import {Row} from 'react-bootstrap';

const Display = (props) =>{
	
	return (
		<>
		<h2>Display</h2>
		<Row>


		{props.products.filter(product => product._id === props.partId).map(filteredPart => (
				<>
				<p>Part # {filteredPart._id}</p>
				<p>Name: {filteredPart.name}</p>
				<p>Brand: {filteredPart.brand}</p>
				<p>Series: {filteredPart.series}</p>
				<p>Input Voltage: {filteredPart.input_volt_min} - {filteredPart.input_volt_max}</p>
				<p>Type: {filteredPart.type}</p>
				<p>Maximum Power: {filteredPart.max_power}</p>
				<p>Maximum Length: {filteredPart.max_length}mm</p>
				</>
			))}


		</Row>
		</>
	)
}

export default Display;