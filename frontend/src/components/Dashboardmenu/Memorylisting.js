import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../products';

const Memorylisting = () =>{
	return (
		<>
		<h2>Memory Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'memory').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Memorylisting;