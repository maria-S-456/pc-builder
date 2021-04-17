import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../products';

const Caselisting = () =>{
	return (
		<>
		<h2>Case Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'case').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Caselisting;