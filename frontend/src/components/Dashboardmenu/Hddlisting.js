import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../products';

const Hddlisting = () =>{
	return (
		<>
		<h2>HDD Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'hdd').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Hddlisting;