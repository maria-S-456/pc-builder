import React from 'react';
import {Row, Col, ListGroup} from 'react-bootstrap';

const Memorylisting = (props) =>{
	return (
		<>
		<h2>Memory Listing</h2>
		<Col>
		
			{props.prod.filter(product => product.partType === 'memory').map(filteredPart => (
				<Row>
					
					{filteredPart.name}
					
				</Row>
			))}
		
		</Col>
		</>
	)
}

export default Memorylisting;