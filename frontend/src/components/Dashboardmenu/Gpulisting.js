import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../products';


const Gpulisting = () =>{
	return (
		<>
		<h2>GPU Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'gpu').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Gpulisting;