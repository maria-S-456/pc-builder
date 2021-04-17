import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../products';

const Mblisting = () =>{
	return (
		<>
		<h2>MB Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'mb').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Mblisting;