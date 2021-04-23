import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Mblisting = (props) =>{
	
	return (
		<>
		<h2>MB Listing</h2>
		<Row>
			{props.prod.filter(product => product.partType === 'mb').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Mblisting;