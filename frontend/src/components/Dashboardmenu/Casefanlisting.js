import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../products';

const Casefanlisting = () =>{
	return (
		<>
		<h2>Case Fan Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'casefan').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Casefanlisting;