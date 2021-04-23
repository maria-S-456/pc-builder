import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Caselisting = (props) =>{
	
	return (
		<>
		<h2>Case Listing</h2>
		<Row>
			{props.prod.filter(product => product.partType === 'case').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Caselisting;