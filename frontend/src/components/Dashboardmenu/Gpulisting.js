import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Gpulisting = (props) =>{
	return (
		<>
		<h2>GPU Listing</h2>
		<Row>
			{props.prod.filter(product => product.partType === 'gpu').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Gpulisting;