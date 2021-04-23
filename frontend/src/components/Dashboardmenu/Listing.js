import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Listing = (props) =>{
	const {setPartId} = props;
	

	return (
		<>
		<h2>Listing</h2>
		
			{props.products.filter(product => product.partType === props.partType).map(filteredPart => (
				<Row>
					<p onClick={(e) => setPartId(e.target.getAttribute('name'))} name={filteredPart._id}>{filteredPart.name}</p>

				</Row>
			))}
		
		</>
	)
}

export default Listing;