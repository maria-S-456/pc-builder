import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../products';

const Psulisting = () =>{
	return (
		<>
		<h2>PSU Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'psu').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Psulisting;