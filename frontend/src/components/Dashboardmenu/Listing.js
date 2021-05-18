import React from 'react';
import {Row} from 'react-bootstrap';

const Listing = (props) =>{
	const {setPartId} = props;
	
	return (
		<>
		<h2>Listing</h2>
		
			{props.products.filter(product => product.partType === props.partType).map(filteredPart => (
				<Row key={filteredPart._id} className="Row grow" onClick={(e) => setPartId(e.target.getAttribute('name'))} name={filteredPart._id}>{filteredPart.name}
				</Row>
			))}
		
		</>
	)
}
export default Listing;