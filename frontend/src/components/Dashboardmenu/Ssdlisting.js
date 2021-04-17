import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../products';

const Ssdlisting = () =>{
	return (
		<>
		<h2>SSD Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'ssd').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Ssdlisting;