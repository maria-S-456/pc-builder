import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Cpulisting = (props) =>{
	return (
		<>
		<h2>CPU Listing</h2>
		<Row>
			{props.prod.filter(product => product.partType === 'cpu').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Cpulisting;