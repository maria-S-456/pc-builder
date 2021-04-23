import React from 'react';
import {Row, Col} from 'react-bootstrap';


const Psulisting = (props) =>{
	return (
		<>
		<h2>PSU Listing</h2>
		<Row>
			{props.prod.filter(product => product.partType === 'psu').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		
		</>
	)
}

export default Psulisting;